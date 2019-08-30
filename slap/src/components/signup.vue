<template lang="html">
     <v-card>
       <v-card-title>
         <span class="headline">User Profile</span>
       </v-card-title>
       <v-card-text>
         <v-container grid-list-md>
           <v-layout wrap>
             <v-flex xs12 sm6 >
               <v-text-field v-model="Name"
                 :rules="[rules.required]"
               label="Name" required></v-text-field>
             </v-flex>
             <v-flex xs12 sm6 >
               <v-text-field v-model="Email"
                 :rules="[rules.required]"
               label="Email" required></v-text-field>
             </v-flex>
             <v-flex xs12 sm6>
               <v-text-field v-model="ID"
                 :rules="[rules.required]"
               label="ID" required></v-text-field>
             </v-flex>
             <v-flex xs12 sm6><v-btn depressed small color="primary">중복확인</v-btn></v-flex>
             <v-flex xs12 sm6 >
               <v-text-field v-model="Password1"
                  :rules="[rules.password, rules.length(6)]"
                label="Password*" type="password" required></v-text-field>
             </v-flex>
             <v-flex xs12 sm6 >
               <v-text-field v-model="Password2"
                  :rules="[rules.password, rules.length(6),rules.same]"
                label="Password Confirm*" type="password" required></v-text-field>
             </v-flex>
           </v-layout>
         </v-container>
         <small>*indicates required field</small>
       </v-card-text>
       <v-card-actions>
         <v-spacer></v-spacer>
         <v-btn color="blue darken-1" flat @click="close">Close</v-btn>
         <v-btn color="blue darken-1" flat @click="signUp">SignUp</v-btn>
       </v-card-actions>
     </v-card>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
export default {
   data:() => {
     return {
       Name: "", Email : "", ID : "", Password1 : "", Password2 : "",
       rules: {
        same : v => (this.Password1!=this.Password2) || 'Please Check Confirm Password',
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required'
      }
     }
   },
   methods:{
     close(){this.$store.commit("switSignInModal")},
     signUp(){
       axios.post('http://kyungmin.iptime.org:3000/signup', {
         id : this.ID,
         password : this.Password2,
         email : this.Email,
         name : this.Name
       }).then(res => {
         console.log(res)
         if(res.msg == true){
           swal({
             title: "SignUp Complete!",
             text: "Enjoy Slap!",
             icon: "success",
           });

         }
         else{
           swal({
    title: "SignUp Failed!",
    text: "Please check your Information",
    icon: "warning"
           });
         }
         }).catch((ex) => {

           swal({
    title: "Network Error!",
    text: "Please check Network Connection",
    icon: "warning"
           });

           });

     }

   }

}
</script>

<style lang="css" scoped>
</style>

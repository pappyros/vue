<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="teal">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <v-btn
                      icon
                      large
                      :href="source"
                      target="_blank"
                      slot="activator"
                    >
                      <v-icon large>code</v-icon>
                    </v-btn>
                    <span>Source</span>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="id"></v-text-field>
                    <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"v-model="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="teal" class="white--text" @click="login()">Login</v-btn>
                  <v-btn color="teal" class="white--text" @click="signUp()">signUp</v-btn>
                  
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>




  <signUp style=" position: absolute;
    top: 30%;
    left : 30%;
    heigth: 100px;
    margin-top: -50px;
    width : 500px"v-if="this.$store.getters.getSignUpModal"></signUp>

  </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert'
import signUp from './signup'
export default {

 data: () => ({
   drawer: null,
   id : null,
   password : null,
     model: null
 }),
 components : {
   signUp
 },
 props: {
   source: "main"
 },
 methods : {
   signUp: function(){
     console.log(this.$store.state.signUpModal);
     this.$store.commit("switSignInModal")
   },
   login : function(){

     axios.post('http://kyungmin.iptime.org:3000/login', {
       id : this.id,
       password : this.password
     }).then(res => {
       console.log(res.data[0])
       if(res.msg == true){
// router.push({ path: 'home' })
         swal({
           title: "SignUp Complete!",
           text: "Enjoy Slap!",
           icon: "success",

         });
       }
       else{
         swal({
  title: "Login Failed!",
  text: "Please check your Id or Password",
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

     swal(this.id);
   }
 }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import '~vuetify/src/stylus/main'
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<template>
  <div id="app">

  <v-sheet
   class="mx-auto"
   elevation="8"
   max-width="100%"
 >
   <v-slide-group
     v-model="model"
     class="pa-4"
     show-arrows
   >
     <v-slide-item
       v-for="n in 12"
       :key="n"
       v-slot:default="{ active, toggle }"
     >
     <v-card v-if="n<12"
   class="mx-auto"
   max-width="280"
 >
   <v-img
     src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
     height="200px"
   ></v-img>

   <v-card-title>
     <div>Top western road trips</div>
     <span class="grey--text subtitle-1">1,000 miles of wonder</span>
   </v-card-title>

   <v-card-actions>
     <v-btn text>Share</v-btn>

     <v-btn
       text
       color="purple"
     >
       Explore
     </v-btn>

     <v-spacer></v-spacer>

     <v-btn
       icon
       @click="show = !show"
     >
       <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
     </v-btn>
   </v-card-actions>

   <v-expand-transition>
     <div v-show="show">
       <v-card-text>
         I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
       </v-card-text>
     </div>
   </v-expand-transition>
 </v-card>



 <v-card v-else
class="mx-auto"
max-width="280"
@click="addJobs()"
>
<v-img
 src=""
 height="200px"
></v-img>

<v-card-title>
 <div>Top western road trips</div>
 <span class="grey--text subtitle-1">1,000 miles of wonder</span>
</v-card-title>

<v-card-actions>
 <v-btn text>Share</v-btn>

 <v-btn
   text
   color="purple"
 >
   Explore
 </v-btn>

 <v-spacer></v-spacer>

 <v-btn
   icon
   @click="show = !show"
 >
   <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
 </v-btn>
</v-card-actions>

<v-expand-transition>
 <div v-show="show">
   <v-card-text>
     I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
   </v-card-text>
 </div>
</v-expand-transition>
</v-card>




     </v-slide-item>
   </v-slide-group>

   <v-expand-transition>
     <v-sheet
       v-if="model != null"
       color="grey lighten-4"
       height="200"
       tile
     >
       <v-layout
         align-center
         fill-height
         justify-center
       >
         <h3 class="title">Selected {{ model }}</h3>
       </v-layout>
     </v-sheet>
   </v-expand-transition>
 </v-sheet>

</div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import swal from 'sweetalert'

export default {
  data: () => ({
    model: null,
  }),
  methods : {
    addJobs(){
      console.log("addjobs!");
    }
  },
  mounted: function() {
        console.log("hihihi");
        axios.post('http://kyungmin.iptime.org:3000/jobSync', {
          //id : this.id,
          //password : this.password
        }).then(res => {
          console.log(res)
          if(res.msg == true){
   // router.push({ path: 'home' })

          }
          else{

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
</script>

<style lang="css" scoped>

</style>

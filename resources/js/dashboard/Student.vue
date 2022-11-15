<template>
    <!-- schedule -->
    <!-- <h1 class="text">dwada</h1> -->
    <div class="container">
        <h4 class="text-secondary">Hello there, <span>{{ $store.getters.getTokenName }}</span></h4><br>
        <div class="row">
            <h1>Available Doctors</h1>
            <div class="col-sm-3 mb-4" v-for="(schedule,index) in schedules"  :key="index">
                <div class="card ">
                <div class="card-body p-4">
                    <div class="user-content">
                        <div class="col-2 user-profile p-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="fa-4x"/>
                        </div>
                        <div class="col-sm p-2 h-25 d-inline-block">
                            <h5>Rating : 5</h5>
                            <h6 class="card-title"><span>{{ schedule.relationships.userspeciality }}</span> : {{ schedule.relationships.username }}</h6>
                            <p class="card-text">{{ 'Surgeon' }}</p>
                            <p class="card-text">{{ schedule.attributes.starting_time }} - {{ schedule.attributes.end_time }}</p>
                        </div>
                    </div>
                    
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12 text-end">
                        <a :href="'/book/'+ schedule.relationships.id"><font-awesome-icon icon="fa-solid fa-circle-check" class="me-4 text-success fa-2x" /></a>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-danger fa-2x"/></a>
                    </div>
                </div>
                </div>
            </div>
           
        </div>
    </div>
</template>

<script>
 import axios from 'axios'
    // import Datepicker from 'vue3-datepicker'
    // import { stat } from 'fs';
    // import { reactive, ref } from 'vue'
    // import { useRouter } from 'vue-router'
    import {useStore} from 'vuex'
    import $ from 'jquery'
  export default{
    setup(){
      
    },
  // load the schedule using option api
    data: function(){
      return {
            schedules: []
                     
        }    
    }, 
    mounted(){
        // this.loadTask();
        this.loadSchedule()
     },
     methods: {
      async loadSchedule(){
          const store = useStore()
          const headers = {
              'Accept': 'application/vnd.api+json',
              'Content-Type': 'application/vnd.api+json',
              'Authorization': 'Bearer ' + store.getters.getToken
            }
            await axios.get('/api/student',{headers})
            .then((res)=>{
              console.log(res)
              this.schedules = res.data.data
            })

            .catch((err)=>{
              console.log(err)
            })
      }
        
        // setInterval(()=>{
        //   this.loadSchedule
        // },3000)

      
              
     },
  }
</script>
<style scoped>
.card {
  height: 20em;
  background-color: aqua;
  overflow: hidden;
}
.card:hover{
  background-color: aliceblue;
  /* overflow: scroll; */
  /* height: 25em; */
  /* width: 20em; */
  z-index: 1;
}
</style>
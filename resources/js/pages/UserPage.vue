<template class="text-center">
    <div class="container">
        <h4 class="text-secondary">Hello there, <span>{{ $store.getters.getTokenName }}</span></h4><br>
        <div class="row">
            <h1>Booking requests</h1>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <div class="user-content">
                        <div class="col-2 user-profile p-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="fa-4x"/>
                        </div>
                        <div class="col-sm p-2">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12 text-end">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-check" class="me-4 text-success fa-2x" /></a>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-danger fa-2x"/></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <div class="user-content">
                        <div class="col-2 user-profile p-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="fa-4x"/>
                        </div>
                        <div class="col-sm p-2">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12 text-end">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-check" class="me-4 text-success fa-2x" /></a>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-danger fa-2x"/></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <div class="user-content">
                        <div class="col-2 user-profile p-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="fa-4x"/>
                        </div>
                        <div class="col-sm p-2">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12 text-end">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-check" class="me-4 text-success fa-2x" /></a>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-danger fa-2x"/></a>
                    </div>
                </div>
                </div>
            </div>
            <div class="col-sm-6 mb-4">
                <div class="card">
                <div class="card-body p-4">
                    <div class="user-content">
                        <div class="col-2 user-profile p-2">
                            <font-awesome-icon icon="fa-solid fa-user" class="fa-4x"/>
                        </div>
                        <div class="col-sm p-2">
                            <h4 class="card-title">Special title treatment</h4>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <!-- <a href="#" class="btn btn-primary position-absolute bottom-0 end-0">Go somewhere</a> -->
                    <div class="col-md-12 text-end">
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-check" class="me-4 text-success fa-2x" /></a>
                        <a href="#"><font-awesome-icon icon="fa-solid fa-circle-xmark" class="text-danger fa-2x"/></a>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router'

// import router from '../router';
import { useStore } from 'vuex'
    export default {
       
    }
</script>
<style scoped>
    .user-content{
        display: flex;
        flex-direction: row;
    }
    .user-profile{
        width: 15%;
    }
</style>
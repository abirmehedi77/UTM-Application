<template>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                <!-- Unauthenticated -->
                <div class="d-flex" v-if="$store.getters.getToken == 0">
                    <!-- <router-view></router-view> -->
                    
                    <router-link :to="{name : 'Login'}" class="nav-link me-4"><span>Login</span></router-link>
                    <router-link :to="{name : 'Register'}" class="nav-link me-4"><span>Register</span></router-link>
                    <!-- <router-link :to="{name : 'User'}" class="nav-link me-4"><span>User {{ $store.getters.getToken }}</span></router-link> -->
                </div>
                    
                 <!-- authorized -->
                <div class="user" v-else>
                    <ul class="navbar-nav me-5 mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ $store.getters.getTokenName }}
                        <!-- <font-awesome-icon icon="fa-solid fa-power-off" /> -->
                        </a>
                        <form @submit.prevent="logout">
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <button type="submit" class="dropdown-item" >Logout</button>
                            </div>
                        </form>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>
        <RouterView v-slot="{ Component }">
            <transition
                name="fade" 
                mode="out-in">
                <component :is="Component"/>
            </transition>
        </RouterView>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
// import { reactive, ref } from 'vue'
    export default {
        setup () {
            const router = useRouter()
            const store = useStore()
            let defaultToken = {
                bearerToken : 0,
                name : 0
            }
             function logout(){
                store.dispatch('removeToken',defaultToken)
                router.push({name : "Login"})
             }
             return {
                logout
             }
        },
        
        mounted() {
            // this.authenticatedUser()
        },
        methods: {
          
        },
    }
</script>

<style scoped>
    /* ::-webkit-scrollbar{
        display: none;
    } */
    #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing:grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        }
    a.router-link-active{
        border-bottom:2px solid #5543ca ;
        }

        /* style for fade */
    .fade-enter-from,
    .fade-leave-to{
        opacity: 0;
        /* transform: translateY(160px); */
        }

    .fade-enter-active,
    .fade-leave-active{
            transition: opacity 0.5s ease-out;
        }
</style>
import { createRouter, createWebHistory } from 'vue-router'
// import Navbar from '../navbar/Navbar.vue'
import Login from '../pages/Login.vue'
import Register from '../pages/register.vue'
import User from '../pages/UserPage.vue'
import store from '../store/index.js'
import ForgotPassword from '../pages/ForgotPassword.vue'
import ResetPassword from '../pages/ResetPassword.vue'
import Success from '../pages/Success.vue'
const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
        // meta: {title : 'Login'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
        // meta: {title : 'Register'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/user',
        name: 'User',
        component: User,
        // meta: {title : 'User'}
        meta:{
            requiresAuth:true
        },
    },
    {
        path: '/forgot_password',
        name: 'Forgot_Password',
        component: ForgotPassword,
        // meta: {title : 'User'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/reset-password/:token/:id',
        name: 'Reset_Password',
        component: ResetPassword,
        // meta: {title : 'User'}
        meta:{
            requiresAuth:false
        },
    },
    {
        path: '/success',
        name: 'Success',
        component: Success,
        // meta: {title : 'User'}
        meta:{
            requiresAuth:false
        },
    }

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});


// redirect user
router.beforeEach((to, from)=>{
    // auththentication is true and localStorage is not set
    if(to.meta.requiresAuth && store.getters.getToken == 0){
        console.log(store.getters.getToken)
        return { name : 'Login' }     
    }
    if(to.meta.requiresAuth == false && store.getters.getToken != 0){
        console.log(store.getters.getToken)
        return { name : 'User' }
    }
    
})

export default router;
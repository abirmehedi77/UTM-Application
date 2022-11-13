<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <form @submit="onSubmit">
                    <div class="mb-3">
                        <h1 class="text-center">Register</h1>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Name for {{ id }}</label>
                        <input type="text" name="name" class="form-control" :id="id">
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Email address</label>
                        <input type="email" name="email" class="form-control" :id="id" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" :id="id">
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Confirm-Password</label>
                        <input type="password" name="password" class="form-control" :id="id">
                    </div>
                    <button type="button" @click="onSubmit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            id: null,
            name: '',
            email: '',
            password: '',
            password_confirmation:''
        }
    },
    mounted () {
        this.id = this._uid
    },
    method: {
        onSubmit(e){
            e.preventDefault()
            // check if not null
            if(!this.name && !this.email && !this.password){
                console.log("Required Fields")
                return
            }
            // transform into object
            const validData = {
                name: this.name,
                email: this.email,
                password: this.password
            }
            // // perform a api call
            // const headers = {
            //     'Accept': 'application/vnd.api+json',
            //     'Content-Type': 'application/vnd.api+json',
            //     // 'Authorization': 'Bearer '
            // }
            this.send(validData)
        },
       async send(data){
            const res = await fetch('http://127.0.0.1:8000/api/register',{
            method: 'POST',
            headers: {
              'Accept': 'application/vnd.api+json',
              'Content-Type': 'application/vnd.api+json'
            },
            body: JSON.stringify(data)
          })

          const Token = await res.json()
          console.log(Token)
        }
    } 
}
</script>

<style scoped>
    .container .row .card{
        margin: 120px auto;
        padding: 2em;
    }
</style>
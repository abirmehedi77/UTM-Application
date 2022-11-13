<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 card">
                <form>
                    <div class="mb-3">
                        <h1 class="text-center">Login</h1>
                    </div>
                    <hr/>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Email address</label>
                        <input type="email" name="email" class="form-control" :id="id" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label :for="id" class="form-label">Password</label>
                        <input type="password" name="password" class="form-control" :id="id">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
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
            id: null
        }
    },
    mounted () {
        this.id = this._uid
    },
    methods: {
        loginAttempt () {
            const headers = {
                'Accept': 'application/vnd.api+json',
                'Content-Type': 'application/vnd.api+json',
                // 'Authorization': 'Bearer '
            }

            // axios.post('',data, {

            // })

        }
    }
}

</script>

<style scoped>
    .container .row .card{
        margin: 200px auto;
        padding: 2em;
    }
</style>
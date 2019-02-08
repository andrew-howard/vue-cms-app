<template>
   <div class="container"> 
        <form>
            <h2>Sign In</h2>
            <div>
                <label>User name:</label>
                <input v-model="username" type="text" required />
            </div>
            <div>
                <label>Password:</label>
                <input v-model="password" type="password" required />
            </div>
            <div>
                <button type="submit" v-on:click="signIn()">Sign In</button>
                <button type="button" v-on:click="register()">Register</button>
            </div>           
        </form>  
    </div>
</template>

<script>
import UserService from '@/services/UserService.js'
import store from '../store/store.js'

export default {
    name: "SignIn",
    components: {
        UserService
    },
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        signIn() {
            var user = { username: this.username, password: this.password }
            UserService.signIn(JSON.stringify(user))
                       .then(result => {
                           this.response = result.data
                           console.log(this.response)
                           store.commit('setUser', this.response)
                           //this.$store.commit('setUser', this.response)
                           this.$router.push('/Contacts')
                       })
            // this.$store.dispatch('AUTH_REQUEST', { username, password})
            //            .then(() => this.$router.push('/'))
        },
        register() {
            this.$router.push({ name: 'Register' })
        }
    }
}
</script>

<style>

</style>

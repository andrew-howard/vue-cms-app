<template>
   <div class="container"> 
        <form>
            <h2>Sign In</h2>
             <div>
                <label>First name:</label>
                <input v-model="firstName" type="text" required />
            </div>
             <div>
                <label>Last name:</label>
                <input v-model="lastName" type="text" required />
            </div>
            <div>
                <label>User name (Email Address):</label>
                <input v-model="username" type="text" required />
            </div>
            <div>
                <label>Password:</label>
                <input v-model="password" type="password" required />
            </div>
            <div>
                <button type="submit" v-on:click="register()">Register</button>
                <button type="button" v-on:click="cancel()">Cancel</button>
            </div>           
        </form> 
        {{response}}
    </div>
</template>

<script>
import UserService from '@/services/UserService.js'

export default {
    name: "Register",
    components: {
        UserService
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            response: {}
        }
    },
    methods: {
        register() {
            var user = {
                firstName: this.firstName,
                lastName: this.lastName,
                password: this.password,
                username: this.username
            }
            UserService.register(JSON.stringify(user))
                       .then(result => {
                           this.response = result.data
                           this.$store.commit('setUser', this.response)
                       })
        },
        cancel() {
            this.$router.go(-1)
        }


        //  addContact() {
        //     ContactsService.addContact(JSON.stringify(this.contact))
        //                    .then(result => {
        //                        this.response = result.data
        //                        this.$store.commit('addContact', this.response)
        //                        this.$router.push({name: 'ContactsList'})
        //                     })
        //                    .catch(error => this.error = error)
        // },
    }
}
</script>

<style>

</style>

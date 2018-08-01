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
        {{error}}   
    </div>
</template>

<script>
export default {
    name: "SignIn",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        signIn() {

        },
        register() {
            this.$router.push({ name: 'Register' })
        }
    }
}
</script>

<style>

</style>

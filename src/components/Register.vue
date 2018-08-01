<template>
   <div class="container"> 
        <form>
            <h2>Sign In</h2>
             <div>
                <label>First name:</label>
                <input v-model="username" type="text" required />
            </div>
             <div>
                <label>Last name:</label>
                <input v-model="username" type="text" required />
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
        {{error}}   
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            password: ""
        }
    },
    methods: {
        register() {
            
        },
        cancel() {
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>

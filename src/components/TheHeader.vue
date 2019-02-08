<template>
    <div id="header">
        <router-link to="/Contacts">Contacts</router-link>
        <router-link to="/ContactAddEdit">Add Contact</router-link>
        <router-link to="/"> Sign In</router-link>
        <div v-if="firstName && lastName">{{firstName}} {{lastName}}</div>
        <!-- <div>{{store.state.user.firstName}}</div> -->
    </div>
</template>

<script>
import store from '../store/store.js'

export default {
    name: 'TheHeader',
    data () {
        return {
            // name: store.state.user.firstName + " " + store.state.user.lastName
            firstName: store.state.user.firstName,
            lastName: store.state.user.lastName
        } 
    }
}
</script>

<style scoped>
    #header {
        width: 100%;
        font-size: 1rem;
        text-align: right;
        margin-bottom: 2rem;
    }
    #header a {
        border: none;
        outline: none;
        cursor: pointer;
        background-color: inherit;
        padding: .5rem;
        transition: 0.3s;
        font-size: 1rem;
        text-decoration: none;
    }
    #header a:hover {
        border-bottom: .1rem solid black;
    }
</style>

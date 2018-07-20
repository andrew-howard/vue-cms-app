<template>
    <div id="header">
        <router-link to="/">Contacts</router-link>
        <router-link to="/AddContact">Add Contact</router-link>
        <!--<router-link href="/"> Sign In / Register</router-link>-->
        <!--<span>Hello {{name}}!</span>    -->
    </div>
</template>

<script>
export default {
    name: 'Header',
    data () {
        return {
            name: 'John Smith'
        } 
    }
}
</script>

<style>
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
    }
    #header a:hover {
        border-bottom: .1rem solid black;
    }
</style>

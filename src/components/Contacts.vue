<template>
    <div id="contact-cards">
        <div v-bind:key="item.email" v-for="item in contacts" class="card" >
            {{item.firstName}} {{item.lastName}}
            <ul>
                <li>Id: {{item.id}}</li>
                <li>Title: {{item.title}}</li>
                <li>Department: {{item.department}}</li>
                <li>Phone: {{item.phone}}</li>
                <li>Email: {{item.emailAddress}}</li>
            </ul>
            <button type="button" v-on:click="editContact(item)">Edit</button>
            <button type="button" v-on:click="deleteContact(item.id)">Delete</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Contacts',
    data () {
        return {
            contacts: [],
            info: null
        }
    },
    mounted() {
        axios.get('http://localhost:63163/api/contacts')
             .then(response => (this.contacts = response.data))
             .catch(error => this.error = error) //console.log(error)
    },
    methods: {
        editContact(contact) {
            this.$router.push({ name: 'AddContact', params: { contactToUpdate: contact } })
        },
        deleteContact(id) {
            axios.delete('http://localhost:63163/api/contacts/' + id)
             .then(response => this.info = response)
             .catch(error => this.error = error)
        }
    }
}
</script>

<style>
#contact-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    grid-gap: 1rem;
}
.card {
    padding: 1rem;
    border: .1rem solid black;
    margin-right: 1rem;
}
</style>

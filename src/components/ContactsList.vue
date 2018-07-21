<template>
    <div id="contact-cards">
        <div v-for="item in contacts" class="card" :key="item.id">
            {{item.firstName}} {{item.lastName}}
            <ul>
                <li>Title: {{item.title}}</li>
                <li>Department: {{item.department}}</li>
                <li>Phone: {{item.phone}}</li>
                <li>Email: {{item.emailAddress}}</li>
            </ul>
            <button type="button" v-on:click="editContact(item)">Edit</button>
            <button type="button" v-on:click="deleteContact(item.id)">Delete</button>
        </div>
        <contact-delete-modal />
    </div>
</template>

<script>
import axios from 'axios'
import ContactDeleteModal from './ContactDeleteModal.vue'

export default {
    name: 'ContactsList',
    components: {
        ContactDeleteModal
    },
    data () {
        return {
            contacts: [],
            info: null
        }
    },
    mounted() {
        //this.getContacts()
        axios.get('http://localhost:63163/api/contacts')
             .then(response => (this.contacts = response.data))
             .catch(error => this.error = error) //console.log(error)
    },
    methods: {
        editContact(contact) {
            this.$router.push({ name: 'ContactAddEdit', params: { contactToUpdate: contact } })
        },
        deleteContact(id) {
            this.$modal.show('contact-delete-modal', { contactId: id });
        }
        // getContacts() {
        //     axios.get('http://localhost:63163/api/contacts')
        //          .then(response => (this.contacts = response.data))
        //          .catch(error => this.error = error) //console.log(error)
        // }
    }
}
</script>

<style scoped>
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

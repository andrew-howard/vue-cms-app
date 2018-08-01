<template>
    <div id="contact-cards" v-if="$store.state.contacts.length > 0">
        <div v-for="item in $store.state.contacts" class="card" :key="item.id">
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
import ContactDeleteModal from './ContactDeleteModal.vue'

export default {
    name: 'ContactsList',
    components: {
        ContactDeleteModal
    },
    mounted() {
        if(!this.$store.state.contacts || this.$store.state.contacts.length === 0)
            this.$store.dispatch('getContacts')
    },
    methods: {
        editContact(contact) {
            this.$router.push({ name: 'ContactAddEdit', params: { contactToUpdate: contact } })
        },
        deleteContact(id) {
            this.$modal.show('contact-delete-modal', { contactId: id });
        }
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

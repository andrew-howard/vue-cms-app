<template>
    <modal name="contact-delete-modal" 
           :width="300"
           :height="100"
           @before-open="beforeOpen"
           >
           <h2>Delete Contact?</h2>
           <button v-on:click="deleteContact()">Yes</button>
           <button v-on:click="dismissModal()">No</button>
    </modal>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ContactDeleteModal',
    data() {
        return {
            id: 0
        }
    },
    methods: {
         deleteContact() {
            axios.delete('http://localhost:63163/api/contacts/' + this.id)
             .then(response => this.info = response)
             .catch(error => this.error = error)
        },
        dismissModal() {
            this.$modal.hide('contact-delete-modal')
        },
        beforeOpen(event) {
            this.id = event.params.contactId
        }
    }
}
</script>

<style scoped>
    modal {
        padding: 1rem;
     }
</style>

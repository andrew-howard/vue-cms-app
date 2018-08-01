<template>
    <modal name="contact-delete-modal" 
           :width="300"
           :height="100"
           @before-open="beforeOpen"
           >
           <div class="model-content-container">
                <h2>Delete Contact?</h2>
                <button v-on:click="deleteContact()">Yes</button>
                <button v-on:click="dismissModal()">No</button>
           </div>           
    </modal>
</template>

<script>
import ContactsService from '@/services/ContactsService.js'

export default {
    name: 'ContactDeleteModal',
    components: {
        ContactsService
    },
    data() {
        return {
            id: 0
        }
    },
    methods: {
        deleteContact() {
            ContactsService.deleteContact(this.id)
                           .then(response => {
                               this.info = response.data
                               this.$store.commit('deleteContact', this.info)
                               this.dismissModal()
                            })
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
    .modal-content-container {
        padding: 1rem;
     }
</style>

<template>
    <div class="container"> 
        <!--<form @submit.prevent="addContact">-->
        <form>
            <h2 v-if="!isEdit">Add Contact</h2>
            <h2 v-if="isEdit">Edit Contact</h2>
            <div>
                <label>First Name:</label>
                <input v-model="contact.firstName" required />
            </div>
            <div>
                <label>Last Name:</label>
                <input v-model="contact.lastName" />
            </div>
            <div>
                <label>Email:</label>
                <input v-model="contact.emailAddress" required />
            </div>
            <div>
                <label>Phone:</label>
                <input v-model="contact.phone" required />
            </div>
            <div>
                <label>Title:</label>
                <input v-model="contact.title" />
            </div>
            <div>
                <label>Department:</label>
                <input v-model="contact.department" />
            </div>
            <div>
                <button type="button" v-on:click="addContact()" v-if="!isEdit">Add Contact</button>
                <button type="button" v-on:click="editContact()" v-if="isEdit">Edit Contact</button>
                <button type="button" v-on:click="cancel()">Cancel</button>
            </div>
            
        </form> 
        {{error}}   
    </div>
    
</template>

<script>
import ContactsService from '@/services/ContactsService.js'

export default {
    name: 'ContactAddEdit',
    components: {
        ContactsService
    },
    props: {
        contactToUpdate: { type: Object, required: false }
    },
    data () {
        return {
            error: "",
            contact: this.contactToUpdate ? this.contactToUpdate : { 
                        id: 0, 
                        firstName: '', 
                        lastName: '', 
                        emailAddress: '', 
                        title: '', 
                        department: '',
                        phone: '' 
                    },
            response: "",
            isEdit: this.contactToUpdate ? true : false
        }
    },
    methods: {
        addContact() {
            ContactsService.addContact(JSON.stringify(this.contact))
                           .then(result => {
                               this.response = result.data
                               this.$store.commit('addContact', this.response)
                               this.$router.push({name: 'ContactsList'})
                            })
                           .catch(error => this.error = error)
        },
        editContact() {
            ContactsService.editContact(this.contact.id, JSON.stringify(this.contact))
                           .then(result => {
                                this.response = result.data
                                this.$store.commit('editContact', this.response)
                                this.$router.push({name: 'ContactsList'})  
                           })
                           .catch(error => this.error = error)
        },
        cancel() {
            return this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
    .container {
        padding-top: 2rem;
        padding-right: 35%;
        padding-left: 35%;
    }
    form {
        width: 100%;
        padding: 1rem;
     }

     form div {
         width: 100%;
         padding: .5rem;
      }

      form div label {
          width: 50%;
          display: block;
       }

       form div input { 
           width: 100%;
           border-radius: .1rem;
           display: block;
       }

       form div button {
           padding: .5rem;
           background-color: white;
           cursor: pointer;
           border: .1rem solid black; 
           margin-right: 1rem;
           width: 10rem;
        }
</style>


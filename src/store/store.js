import Vue from 'vue'
import Vuex from 'vuex'
import ContactsService from '@/services/ContactsService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    error: ""
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },
    editContact(state, contact) {
      state.contacts.filter(obj => obj.id === contact.id)[0] = contact;
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter(obj => obj.id !== id)
    },
    setContacts(state, contacts) {
      state.contacts = contacts
    }
  },
  actions: {
    getContacts({ commit }) {
      ContactsService.getContacts()
                     .then(response => commit('setContacts', response.data))
                     .catch(error => this.state.error = error)
    }
  }
})
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
// import ContactsService from '@/services/ContactsService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [],
    error: "",
    token: localStorage.getItem('user-token') || '',
    status: '',
    user: {}
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
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
    },
    setUser(state, user) {
      // console.log("suh")
      // console.log(user)
      state.user = { firstName: user.firstName, lastName: user.lastName }
      console.log(state.user)
    }
  }
})
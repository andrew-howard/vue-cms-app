import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import ContactsList from '@/components/ContactsList'
import ContactAddEdit from '@/components/ContactAddEdit'
import store from '../store/store.js'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  //if(!this.$store.getters.isAuthenticated) {
  if(!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/Contacts')
}

const ifAuthenticated = (to, from, next) => {
  if(store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn,
      beforeEnter: ifNotAuthenticated
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Contacts',
      name: 'ContactsList',
      component: ContactsList,
      beforeEnter: ifAuthenticated
    },
    {
      path: '/ContactAddEdit',
      name: 'ContactAddEdit',
      component: ContactAddEdit,
      props: true
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Register from '@/components/Register'
import ContactsList from '@/components/ContactsList'
import ContactAddEdit from '@/components/ContactAddEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Contacts',
      name: 'ContactsList',
      component: ContactsList
    },
    {
      path: '/ContactAddEdit',
      name: 'ContactAddEdit',
      component: ContactAddEdit,
      props: true
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Contacts from '@/components/Contacts'
import AddContact from '@/components/AddContact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/AddContact',
      name: 'AddContact',
      component: AddContact,
      props: true
    }
  ]
})
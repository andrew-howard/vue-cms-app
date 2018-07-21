import Vue from 'vue'
import Router from 'vue-router'
import ContactsList from '@/components/ContactsList'
import ContactAddEdit from '@/components/ContactAddEdit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
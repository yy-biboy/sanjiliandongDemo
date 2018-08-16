import Vue from 'vue'
import Router from 'vue-router'
import SelectAddress from '@/components/selectAddress'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SelectAddress',
      component: SelectAddress
    }
  ]
})

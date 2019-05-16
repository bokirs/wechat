import Vue from 'vue'
import Router from 'vue-router'
import Cart from '@/views/chat/Chat.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'cart',
      component: Cart
    },
  ]
})

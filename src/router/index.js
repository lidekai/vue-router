import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/page/index'
import Content from '@/components/page/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }
  ]
})

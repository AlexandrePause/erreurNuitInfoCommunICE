import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
import Form from '@/components/Form2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/error/:number',
      name: 'Error',
      component: Test
    },
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ]
})

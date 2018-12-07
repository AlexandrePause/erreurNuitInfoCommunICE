import Vue from 'vue'
import Router from 'vue-router'
import Form from '@/components/Form'
import Test from '@/components/Test'
import Form2 from '@/components/Form2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/error/404'
    },
    {
      path: '/',
      name: 'Form',
      component: Form
    },
    {
      path: '/error/:number',
      name: 'Error',
      component: Test
    },
    {
      path: '/v',
      name: 'Form2',
      component: Form2
    }
  ]
})

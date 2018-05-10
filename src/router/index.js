import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home.vue'
import Soon from '@/components/soon.vue'
import Top from '@/components/top.vue'
import Subject from '@/components/subject.vue'
Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta:{ keepAlive: true },
    },
    {
      path: '/soon',
      name: 'Soon',
      component: Soon,
      meta:{ keepAlive: true },
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      meta:{ keepAlive: true },
    },
    {
      path: '/subject',
      name: 'Subject',
      component: Subject
    }
  ]
})

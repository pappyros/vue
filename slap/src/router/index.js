import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/main/main'
import Jobs from '@/components/main/menu/jobs'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    { path: '/main', component: Main,
      children: [
        {
          // A will be rendered in the second <router-view>
          // when /your-sidebar-url/a is matched
          path: 'jobs',
          component: Jobs}
        // },
        // {
        //   // B will be rendered in the second <router-view>
        //   // when /your-sidebar-url/b is matched
        //   path: 'b',
        //   component: B
        // }
      ]
    },
    {
      path: '/main/jobs',
      name: 'Jobs',
      component: Jobs
    }
  ]
})

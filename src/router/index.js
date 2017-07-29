import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Channel from '@/pages/Channel'
import ChannelList from '@/pages/ChannelList'
import SignIn from '@/pages/SignIn'
import SignUp from '@/pages/SignUp'
import Settings from '@/pages/Settings'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/channel',
      name: 'channels',
      component: ChannelList
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: Channel
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})

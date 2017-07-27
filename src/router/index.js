import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HomePage'
import Channel from '@/components/ChannelPage'
import ChannelsList from '@/components/ChannelsListPage'

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
      component: ChannelsList
    },
    {
      path: '/channel/:id',
      name: 'channel',
      component: Channel
    }
  ]
})

<template>
  <b-navbar toggleable type="light" variant="faded">

    <b-nav-toggle target="nav_collapse"></b-nav-toggle>

    <b-link class="navbar-brand" to="/">
      <span>Stream</span>
    </b-link>

    <b-collapse is-nav id="nav_collapse">

      <b-nav is-nav-bar>
          <router-link class="nav-link" :to="{ name: 'channels' }">Channels</router-link>
      </b-nav>

      <st-user-menu class="ml-auto"></st-user-menu>

    </b-collapse>
  </b-navbar>
</template>

<script>
  import UserMenu from '@/components/UserMenu'

  export default {
    components: {
      'st-user-menu': UserMenu
    }
  }
</script>

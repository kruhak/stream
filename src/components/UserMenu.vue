<template>
  <b-nav is-nav-bar v-if="user">
    <b-nav-item-dropdown right>

      <template slot="button-content">
        <span>{{ user.name }}</span>
      </template>

      <router-link class="dropdown-item" :to="{ name: 'settings' }">Your channel</router-link>
      <b-dropdown-item @click="signOut">Sign out</b-dropdown-item>
    </b-nav-item-dropdown>

  </b-nav>

  <b-nav v-else>
    <router-link class="nav-link" :to="{ name: 'signin' }">Sign in</router-link>
    <router-link class="nav-link" :to="{ name: 'signup' }">Sign up</router-link>
  </b-nav>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters({
      user: 'user/getUser'
    }),

    methods: mapActions({
      signOut: 'user/signOut'
    })
  };
</script>

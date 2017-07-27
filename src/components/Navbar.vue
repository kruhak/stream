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

      <b-nav is-nav-bar class="ml-auto">
        <b-nav-item-dropdown right>

          <template slot="button-content">
            <span>User</span>
          </template>

          <b-dropdown-item to="#">Profile</b-dropdown-item>
          <b-dropdown-item to="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-nav>
    </b-collapse>
  </b-navbar>

</template>

<script>
  export default {
    name: 'st-navbar'
  };
</script>

<style>

</style>
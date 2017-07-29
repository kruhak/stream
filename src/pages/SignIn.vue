<template>
  <b-form class="container">
    <b-form-fieldset label="Username">
      <b-form-input v-model="username" type="text"></b-form-input>
    </b-form-fieldset>

    <b-form-fieldset label="Password">
      <b-form-input v-model="password" type="password"></b-form-input>
    </b-form-fieldset>

    <b-button v-on:click="signIn" variant="primary">Sign in</b-button>
  </b-form>
</template>


<script>
  export default {
    data: function () {
      return {
        username: '',
        password: '',
      }
    },

    methods: {
      signIn () {
        this.$store.dispatch('user/signIn').then(() => {
          this.$router.push({ name: 'home' })
        });
      }
    }
  }
</script>
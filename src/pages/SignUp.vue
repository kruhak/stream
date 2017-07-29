<template>
  <b-form class="container">
    <b-form-fieldset label="Username">
      <b-form-input v-model="username" type="text"></b-form-input>
    </b-form-fieldset>

    <b-form-fieldset label="Password">
      <b-form-input v-model="password" type="password"></b-form-input>
    </b-form-fieldset>

    <b-button variant="primary">Sign up</b-button>
  </b-form>
</template>

<script>
  export default {
    data: function () {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
<template>
  <b-form class="container">
    <b-form-fieldset label="Username">
      <b-form-input v-model="username" type="text"></b-form-input>
    </b-form-fieldset>

    <b-form-fieldset label="Password">
      <b-form-input v-model="password" type="password"></b-form-input>
    </b-form-fieldset>

    <b-form-fieldset label="Channel name">
      <b-form-input v-model="channelName" type="text"></b-form-input>
    </b-form-fieldset>

    <b-form-fieldset label="Stream key">
      <div class="input-group">
        <b-form-input disabled :value="streamKey" type="text"></b-form-input>
        <span class="input-group-btn">
          <b-button class="btn-outline">Regenerate</b-button>
        </span>
      </div>
    </b-form-fieldset>

    <b-button v-on:click="save" variant="primary">Save</b-button>
  </b-form>
</template>

<script>
  export default {
    data: function () {
      return {
        username: '',
        password: '',
        channelName: '',
        streamKey: ''
      }
    }
  }
</script>
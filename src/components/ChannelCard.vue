<template>
  <div class="card card-outline">
    <div class="card-block">
      <router-link :to="{ name: 'channel', params: { id: channel.id }}">{{ channel.title }}</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'st-channel-card',

    props: ['channel']
  }
</script>
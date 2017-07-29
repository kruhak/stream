<template>
  <div class="channel">
    <div class="loading" v-if="!channel">Loading...</div>

    <div v-if="channel" class="channel-content">
      <h1>{{ channel.title }}</h1>

      <st-video :source="channel.source"></st-video>
    </div>
  </div>
</template>

<script>
  import Video from '@/components/Video';

  export default {
    computed: {
      channel: function () {
        return this.$store.getters['channel/getChannelById'](this.$route.params.id);
      }
    },

    components: {
      'st-video': Video
    }
  }
</script>

<style>

</style>
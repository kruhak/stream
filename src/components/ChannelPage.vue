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
  import channels from '@/channels';

  export default {
    data: function () {
      return {
        channel: null,
      }
    },

    created: function () {
      this.fetchChannelData();
    },

    methods: {
      fetchChannelData() {
        setTimeout(() => {
          this.channel = channels[this.$route.params.id];
        }, 1000);
      }
    },

    components: {
      'st-video': Video
    }
  }
</script>

<style>

</style>
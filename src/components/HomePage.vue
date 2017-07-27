<template>
  <div class="homepage row">
    <div class="channel-preview" v-for="channel in channels">
      <st-channel-card :channel="channel"></st-channel-card>
    </div>
  </div>
</template>

<script>
  import ChannelCard from '@/components/ChannelCard'
  import channels from '@/channels';

  export default {
    data: function () {
      return {
        channels: channels
      }
    },

    components: {
      'st-channel-card': ChannelCard
    },
  }
</script>

<style>

</style>
<template>
  <div class="homepage row">
    <div class="channel-preview" v-for="channel in channels">
      <st-channel-card :channel="channel"></st-channel-card>
    </div>
  </div>
</template>

<script>
  import ChannelCard from '@/components/ChannelCard'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      channels: function () {
        return this.$store.getters['channel/getActiveChannels']();
      },
    },

    components: {
      'st-channel-card': ChannelCard
    },
  }
</script>

<template>
  <div class="channels row">
    <div class="channel-preview" v-for="channel in channels">
      <st-channel-card :channel="channel"></st-channel-card>
    </div>
  </div>
</template>

<script>
  import ChannelCard from '@/components/ChannelCard'
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('channel', ['channels'])
    },

    components: {
      'st-channel-card': ChannelCard
    },
  }
</script>

<style>

</style>
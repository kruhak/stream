<template>
  <video controls autoplay preload="auto" id="video"></video>
</template>

<script>
  import Hls from 'hls.js';

  export default {
    name: 'st-video',

    props: ['source'],

    mounted: function () {
      let video = this.$el;

      let hls = new Hls();
      hls.attachMedia(video);

      hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        hls.loadSource(this.source);

        hls.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
          video.play();
        });
      });
    }
  }
</script>

<style scoped>
  video {
    width: 720px;
    height: 405px;
  }
</style>
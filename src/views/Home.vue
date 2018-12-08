<template>
  <div class="twitter-wrap">
    <twitter-col contentFor="MakeSchool" />
    <twitter-col contentFor="newsycombinator" />
    <twitter-col contentFor="ycombinator" />
  </div>
</template>

<script>
import TwitterCol from '@/components/TwitterCol'

export default {
  name: 'Home',
  components: {
    TwitterCol
  }
}
</script>

<style lang="stylus">
.twitter-wrap
  width 100%
  display flex
</style>
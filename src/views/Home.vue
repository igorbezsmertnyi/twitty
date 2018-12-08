<template>
  <div class="twitter-wrap">
    <div class="twitter-wrap__mobile">
      <el-tabs 
        v-model="activeTab" 
        @tab-click="changeTab"
        class="twitter-wrap__mobile__tabs"
      >
        <el-tab-pane label="@MakeSchool" name="first">
          <twitter-col contentFor="MakeSchool" />
        </el-tab-pane>
    
        <el-tab-pane label="@newsycombinator" name="second">
          <twitter-col contentFor="newsycombinator" />
        </el-tab-pane>

        <el-tab-pane label="@ycombinator" name="third">
          <twitter-col contentFor="ycombinator" />
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="twitter-wrap__desktop">
      <twitter-col contentFor="MakeSchool" />
      <twitter-col contentFor="newsycombinator" />
      <twitter-col contentFor="ycombinator" />
    </div>
  </div>
</template>

<script>
import TwitterCol from '@/components/TwitterCol'

export default {
  name: 'Home',
  data: () => ({
    activeTab: 'first'
  }),

  components: {
    TwitterCol
  },

  methods: {
    changeTab(tab, e) {
      console.log(tab, e)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles'

.twitter-wrap
  width 100%
  display flex

  &__desktop
  &__mobile
    width 100%

  &__desktop
    display none

    +breakpoint(tablet)
      display flex

  &__mobile
    display flex

    +breakpoint(tablet)
      display none

    &__tabs
      width 100%
</style>

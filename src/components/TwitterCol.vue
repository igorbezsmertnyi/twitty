<template>
  <div class="twitter-col">
    <div class="twitter-col__head">
      <p class="twitter-col__name name">@{{ contentFor }}</p>
      <filters :filterFor="contentFor" />
    </div>

    <ul class="twitter-col__twitts">
      <twitt
        v-for="item in twittsArr"
        :key="item.id"
        :twitt="item"
      />
    </ul>
  </div>
</template>

<script>
import Twitt from './Twitt'
import Filters from './Filters'

export default {
  name: 'TwitterCol',
  props: ['contentFor'],
  components: {
    Twitt,
    Filters
  },

  data: () => ({
    twittsArr: []
  }),

  watch: {
    twitts: {
      immediate: true,
      deep: true,
      handler (newVal) { this.setTwitts(newVal) }
    }
  },

  beforeMount() {
    this.$store.dispatch('loadTwitts', this.contentFor)
  },

  methods: {
    setTwitts(arr) {
      setTimeout(() => this.twittsArr = arr, 40)
    }
  },

  computed: {
    twitts() {
      return this.$store.getters.getTwitts(this.contentFor.toLowerCase())
    }
  }
}
</script>

<style lang="stylus">
@import '../styles'

.twitter-col
  width calc(100% - 40px)
  padding 20px
  margin 0
  border-right 1px solid #e8ecf1
  transition opacity .4s

  +breakpoint(mobile)
    width 70%
    margin 20px auto
    padding 0 24px

  +breakpoint(tablet)
    width calc(100% / 3)
    opacity .6

  &:last-child
    border-right 0

  &:hover
    opacity 1

  &__head
    position relative
    display flex
    justify-content space-between
    align-items center

  &__name
    font-weight 500
    color #409EFF
    cursor pointer

  &__twitts
    padding 0 0 40px 0

    +breakpoint(tablet)
      height calc(100vh - 170px)
      margin-top 56px
      overflow-y auto

    &::-webkit-scrollbar {
      margin-right 0
    }
</style>

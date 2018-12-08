<template>
  <div class="twitter-col">
    <p class="twitter-col__name name">@{{ contentFor }}</p>

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

export default {
  name: 'TwitterCol',
  props: ['contentFor'],
  components: {
    Twitt
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
.twitter-col
  width calc(100% / 3)
  padding 0 10px 0 24px
  margin 20px 0 0
  border-right 1px solid #e8ecf1
  opacity .6
  transition opacity .4s

  &:last-child
    border-right 0

  &:hover
    opacity 1

  &__name
    font-weight 500
    color rgba(1, 50, 67, 1)
    cursor pointer

  &__twitts
    height 100vh
    padding-left 0
    margin-top 56px
    overflow-y auto
</style>

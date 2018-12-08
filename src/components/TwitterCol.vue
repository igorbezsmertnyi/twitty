<template>
  <div class="twitter-col">
    <p class="twitter-col__name name">@{{ contentFor }}</p>
  </div>
</template>

<script>
import Twitt from './Twitt'

export default {
  name: 'TwitterCol',
  components: {
    Twitt
  },
  props: ['contentFor']
}
</script>

<style lang="stylus">
.twitter-col
  width calc(100% / 3)
  padding 0 24px
  margin 20px 0
  border-right 1px solid #e8ecf1

  &:last-child
    border-right 0

  &:hover
    .name
      opacity 1

  &__name
    font-weight 500
    color rgba(1, 50, 67, 1)
    opacity .6
    transition opacity .4s
    cursor pointer
</style>

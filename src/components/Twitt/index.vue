<template>
  <li class="twitt">
    <user :user="twitt.user" />
    <twitt-content :text="twitt.text" />
  </li>
</template>

<script>
import User from './User'
import TwittContent from './TwittContent'

export default {
  name: 'Twitt',
  props: ['twitt'],
  components: {
    TwittContent,
    User
  }
}
</script>

<style lang="stylus">
.twitt
  list-style none
  margin-bottom 32px
</style>

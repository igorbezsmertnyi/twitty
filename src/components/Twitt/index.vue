<template>
  <li class="twitt">
    <user 
      :user="twitt.user"
      :retweetedStatus="twitt.retweeted_status"
    />

    <a :href="twittUrl" target="_blank">
      <twitt-content 
        :text="twitt.text"
        :entities="twitt.entities"
      />

      <created-at :createdAt="twitt.created_at" />
    </a>
  </li>
</template>

<script>
import User from './User'
import TwittContent from './TwittContent'
import CreatedAt from './CreatedAt'

export default {
  name: 'Twitt',
  props: ['twitt'],
  components: {
    TwittContent,
    User,
    CreatedAt
  },

  computed: {
    twittUrl() {
      return `https://twitter.com/${this.twitt.user.screen_name}/status/${this.twitt.id_str}`
    }
  }
}
</script>

<style lang="stylus">
.twitt
  list-style none
  margin-bottom 48px

  a
    text-decoration none
</style>

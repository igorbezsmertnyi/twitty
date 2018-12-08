<template>
  <div class="twitt-user">
    <a 
      :href="userUrl" 
      target="_blank" 
      class="twitt-user__link"
    >
      <div class="twitt-user__img">
        <img :src="userImage" />
      </div>

      <p class="twitt-user__name">{{ user.name }}</p>
    </a>

    <p 
      v-show="this.retweetedStatus"
      class="twitt-user__retwitted"
    >
      {{ user.name }} Retwitted
    </p>
  </div>
</template>

<script>
export default {
  name: 'User',
  props: ['user', 'retweetedStatus'],

  computed: {
    userUrl() {
      const url = this.retweetedStatus ? this.retweetedStatus.user.screen_name : this.user.screen_name
      return `https://twitter.com/${url}`
    },

    userImage() {
      return this.retweetedStatus ? this.retweetedStatus.user.profile_image_url : this.user.profile_image_url
    }
  }
}
</script>

<style lang="stylus">
.twitt-user
  display flex
  justify-content space-between
  align-items center
  border-bottom 1px solid #e8ecf1
  padding-bottom 14px

  &__link
    display flex
    align-items center
    text-decoration none

  &__img
    width 40px
    height 40px
    border-radius 50%
    border 3px solid #222f3e
    overflow hidden
    box-shadow 3px 3px 10px 1px rgba(34, 47, 62, 0.14)
    margin-right 14px

    img
      width 100%
      height 100%
      object-fit cover

  &__name
    font-weight 500
    font-size 14px
    color #222f3e
    text-decoration none
  
  &__retwitted
    font-size 12px
    color #8395a7
    padding-left 14px
    margin 0
</style>

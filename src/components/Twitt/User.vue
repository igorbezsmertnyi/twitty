<template>
  <a 
    :href="`https://twitter.com/${user.screen_name}`" 
    target="_blank" 
    class="twitt-user"
  >
    <div class="twitt-user__img">
      <img :src="user.profile_image_url" :alt="user.name">
    </div>

    <p class="twitt-user__name">{{ user.name }}</p>
  </a>
</template>

<script>
export default {
  name: 'User',
  props: ['user']
}
</script>

<style lang="stylus">
.twitt-user
  display flex
  align-items center
  text-decoration none
  border-bottom 1px solid #e8ecf1
  padding-bottom 14px

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
</style>

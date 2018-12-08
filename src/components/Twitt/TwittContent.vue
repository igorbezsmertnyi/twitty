<template>
  <div class="twitt-content">
    <p class="twitt-content__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TwittContent',
  props: ['text']
}
</script>

<style lang="stylus">
.twitt-content
  padding 8px 12px

  &__text
    font-size 14px
    color #222f3e
</style>

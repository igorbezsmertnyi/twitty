<template>
  <div class="twitt-created">
    {{ formatDate }}
  </div>
</template>

<script>
export default {
  name: 'CreatedAt',
  props: ['createdAt'],

  computed: {
    formatDate() {
      return new Date(this.createdAt).toLocaleDateString('en-us', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      })
    }
  }
}
</script>

<style lang="stylus">
.twitt-created
  font-size 12px
  color #8395a7
  padding-left 14px
</style>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  beforeCreate() {
    this.$store.dispatch('loadLocalData')
  }
}
</script>

<style lang="stylus">
html
body
  padding 0
  margin 0
  overflow hidden

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  overflow hidden
</style>

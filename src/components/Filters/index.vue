<template>
  <div class="filters">
    <el-button icon="el-icon-setting" circle @click="toggleMenu" />

    <div 
      class="filters__form"
      :class="{
        'filters__form--visible': isOpen
      }"
    >
      <div class="filters__form__filter">
        <label class="filters__form__filter__label">Order by: </label>
        <el-select
          v-model="filters.sort"
          placeholder="Order"
          @change="changeFilter('sort', $event)"
        >
          <el-option label="Newest first" value="desc" />
          <el-option label="Oldest first" value="asc" />
        </el-select> 
      </div>

      <div class="filters__form__filter">
        <label class="filters__form__filter__label">Count of twitts: </label>
        <el-input
          v-model="filters.count"
          placeholder="Count of twitts"
          @change="changeFilter('count', $event)" 
        />
      </div>

      <div class="filters__form__filter">
        <label class="filters__form__filter__label">Time range: </label>
        <el-date-picker 
          v-model="filters.dateTime" 
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
          @change="changeFilter('dateTime', $event)" 
        />
      </div>

      <el-button
        @click="applyFilters"
        class="filters__form__apply" 
        type="primary" 
        plain
      >
        Filter
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  props: ['filterFor'],
  data: () => ({
    isOpen: false
  }),

  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },

    changeFilter(option, e) {
      this.$store.dispatch('changeFilter', { 
        key: this.filterFor.toLowerCase(),
        option: option,
        value: e
      })
    },

    applyFilters() {
      this.$store.dispatch('applyFilters', this.filterFor.toLowerCase())
      this.isOpen = false
    }
  },

  computed: {
    filters() {
      return this.$store.getters.getFilters(this.filterFor.toLowerCase())
    }
  }
}
</script>

<style lang="stylus">
.filters
  &__form
    position absolute
    width 100%
    height 0
    left 0
    padding 20px 0
    background #fff
    transition all linear .2s
    opacity 0

    &--visible
      height 220px
      transition all linear .2s
      opacity 1
    
    &__filter
      padding 10px
      display flex
      align-items center
      
      label
        font-size 12px
        color #8395a7
        padding-right 14px
        white-space pre
      
      input
        max-width 140px
    
    &__apply
      margin-top 24px
</style>

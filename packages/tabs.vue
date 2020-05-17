<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'SyTabs',
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ['horizontal', 'vertical'].indexOf(value) >= 0
      }
    }
  },
  data() {
    return {
      eventBus: new Vue()
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    // this.$children数组
    this.$children.forEach(vm => {
      if (vm.$options.name === 'sy-tabs-head') {
        vm.$children.forEach(item => {
          if (
            item.$options.name === 'sy-tabs-item' &&
            item.name === this.selected
          ) {
            this.eventBus.$emit('update:selected', this.selected, item)
          }
        })
      }
    })
  }
  // created() {
  //   this.$emit('update:selected', 'xxx')
  // }
}
</script>

<style lang="scss" scoped>
</style>
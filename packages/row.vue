<template>
  <div class="rows" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SyRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle() {
      const { gutter } = this
      return { marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px' }
    }
  },
  mounted() {
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style lang="scss" scoped>
.rows {
  display: flex;
}
</style>

<template>
  <div class="tabs-header" ref="tabshead">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyTabsHeader',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (itemName, item) => {
      this.updateLinePosition(item)
    })
  },
  methods: {
    updateLinePosition(selectedVm) {
      const { width, left } = selectedVm.$el.getBoundingClientRect()
      const { left: left2 } = this.$refs.tabshead.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left - left2}px`
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 40px;
  position: relative;
  border-bottom: 1px solid #ddd;
  > .actions-wrapper {
    margin-left: auto;
  }
}
.line {
  position: absolute;
  left: 0;
  bottom: 0px;
  border-bottom: 2px solid #448ef7;
  transition: all 350ms;
}
</style>
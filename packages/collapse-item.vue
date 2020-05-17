<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SyCollapseItem',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    }
  },
  inject: ['eventBus'],
  mounted() {
    this.eventBus &&
      this.eventBus.$on('update:selected', vm => {
        if (vm !== this) {
          this.close()
        }
      })
  },
  methods: {
    toggle() {
      if (this.open) {
        this.open = false
      } else {
        this.open = true
        this.eventBus && this.eventBus.$emit('update:selected', this)
      }
    },
    close() {
      this.open = false
    }
  }
}
</script>

<style lang="scss">
.collapseItem {
  > .title {
    border: 1px solid #ccc;
    margin: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    > .title:last-child {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .content {
    padding: 8px;
    margin-bottom: -1px;
  }
}
</style>
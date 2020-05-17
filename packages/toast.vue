<template>
  <div class="toast">
    <slot></slot>
    <span class="line"></span>
    <span v-if="closeButton" class="close" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>

<script>
export default {
  name: 'SyToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default() {
        // 如果返回的是一个对象，那么默认值必须是一个函数
        return {
          text: '关闭',
          callback: undefined
        }
      }
    }
  },
  mounted() {
    if (this.autoClose) {
      setTimeout(() => {
        this.close()
      }, this.autoCloseDelay * 1000)
    }
  },
  methods: {
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      this.close()
      // this.closeButton.callback()
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  height: $toast-height;
  color: white;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  padding: 0 16px;
}
.close {
  padding-left: 16px;
}
.line {
  height: 100%;
  border-left: 1px solid #666;
  margin-left: 16px;
}
</style>
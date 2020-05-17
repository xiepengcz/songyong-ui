<template>
  <div class="sy-switch" @click="handleClick" :class="{'is-checked': value}">
    <span class="sy-switch__core" ref="core">
      <span class="sy-switch__button"></span>
    </span>
    <input class="sy-switch__input" type="checkbox" :name="name" ref="input" />
  </div>
</template>

<script>
export default {
  name: 'SySwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value)
      // 等待value发生改变，再执行setColor
      await this.$nextTick()
      this.setColor()
      this.$refs.input.checked = this.value
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted() {
    // 修改开头颜色
    this.setColor()
    // 控制
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="scss" scoped>
.sy-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;
  .sy-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .sy-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .sy-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
.sy-switch.is-checked {
  .sy-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .sy-switch__button {
      transform: translateX(20px);
    }
  }
}
</style>
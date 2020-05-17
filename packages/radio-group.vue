<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SyRadioGroup',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>
</style>
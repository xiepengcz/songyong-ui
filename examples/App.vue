<template>
  <div id="app">
    <div>
      <div class="row">
        <sy-button icon="delete">默认按钮</sy-button>
        <sy-button type="primary">主要按钮</sy-button>
        <sy-button type="success">成功按钮</sy-button>
        <sy-button type="info">信息按钮</sy-button>
        <sy-button type="warning">警告按钮</sy-button>
        <sy-button type="danger">危险按钮</sy-button>
      </div>
      <s-button>123</s-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
}
.sy-button {
  margin-right: 20px;
}
.sy-input {
  width: 200px;
}
</style>

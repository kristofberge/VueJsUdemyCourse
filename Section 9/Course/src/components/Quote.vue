<template>
  <div class="col-xs-12">
    <div class="title">
        <slot name="title"></slot>
        <span style="color: #ccc"><slot name="subtitle">The subtitle</slot></span>
    </div>
    <hr>
    <div>
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 1px;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}

h2 {
  color: red;
}

.title {
    font-style: italic;
}
</style>
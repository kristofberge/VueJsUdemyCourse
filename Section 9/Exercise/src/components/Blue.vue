<template>
  <div>
    <slot name="title"></slot>
    <hr />
    <slot name="content"></slot>
  </div>
</template>

<script>
</script>

<style scoped>
div {
  border: 1px solid blue;
  background-color: lightblue;
  padding: 30px;
  margin: 20px auto;
  text-align: center;
}
h3 {
  font-weight: bolder;
}
</style>
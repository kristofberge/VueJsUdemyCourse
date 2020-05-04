<template>
  <div class="col-xs-12 col-sm-6">
    <h2>Server # {{ server.id }}</h2>
    <div>
      {{ server.status }}
      <button @click="server.status = 'Normal'">Fix it!</button>
    </div>
    <p v-if="server != null">Server Details are currently not updated</p>
  </div>
</template>

<script>
export default {
  props: {
    server: Object
  }
};
</script>

<style>
</style>

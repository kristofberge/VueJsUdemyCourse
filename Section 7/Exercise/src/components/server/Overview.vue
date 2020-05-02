<template>
  <div class="row">
    <servers-statusses></servers-statusses>
    <bottom-message></bottom-message>
  </div>
</template>

<script>
import Message from './Message.vue';
import ServerStatus from './ServerStatus.vue';
export default {
    components: {
        'bottom-message': Message,
        'servers-statusses': ServerStatus
    }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
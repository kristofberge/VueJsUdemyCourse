<template>
  <div>
    <h2>Quotes added</h2>
    <progressBar 
      :maxValue="maxValue" 
      :minValue="minValue"
      :currentValue="currentValue"></progressBar>
  </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
export default {
  props: {
    maxValue: {
      type: Number,
      required: true,
      default: 100
    },
    minValue: {
      type: Number,
      default: 0
    },
    currentValue: {
      type: Number,
      default: 0
    }
  },
  components: {
    progressBar: ProgressBar
  }
};
</script>

<style scoped>
</style>
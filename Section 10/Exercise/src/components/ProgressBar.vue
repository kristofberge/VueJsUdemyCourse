<template>
  <div class="outer">
    <div class="panel panel-default inner" :style="progressBarWidth">
      <p class="counter">{{currentValue}}/{{maxValue}}</p>
    </div>
  </div>
</template>

<script>
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
  computed: {
    progressBarWidth() {
      var width = (this.currentValue / this.maxValue) * 100;
      return "width: " + width + "% !important";
    }
  }
};
</script>

<style scoped>
.outer {
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 3px;
}
.inner {
  text-align: center;
  height: 100%;
  background-color: #5372b0;
  border-radius: 3px;
  vertical-align: middle;
}
.counter {
  padding-top: 4px;
  text-align: center;
  vertical-align: middle;
  color: white;
}
</style>
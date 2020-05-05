<template>
  <div>
    <h3>New quote</h3>
    <button @click="counter++">Increase</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        };
    },
    deactivated() {
        console.log('deactivated');
    },
    activated() {
        console.log('activated');
    }
};
</script>

<style scoped>
h3 {
  font-style: italic;
}
</style>
<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User name: {{ reverseName() }}</p>
    <p>User age: {{ userAge }}</p>
    <button @click="resetName">reset name</button>
    <button @click="resetFn()">reset name</button>
  </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
  props: {
    myName: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    reverseName() {
      return this.myName
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.myName = "Kristof";
      this.$emit("nameReset", this.myName);
    }
  },
  created() {
    eventBus.$on("ageEditted", age => {
      this.userAge = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>

<template>
  <div class="input-section-outer">
    <div class="input-section-inner">
      <h4>Quote</h4>
      <textarea class="quote-input" v-model="enteredText"></textarea>
      <br />
      <button class="add-button" @click="sendNewQuote">Add quote</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    onAddQuoteClicked: {
      type: Function
    }
  },
  data() {
    return {
      enteredText: ""
    }
  },
  methods: {
    sendNewQuote() {
      this.onAddQuoteClicked(this.enteredText);
      this.enteredText = "";
    }
  }
};
</script>

<style scoped>
.input-section-outer {
  text-align: center;
  margin-bottom: 50px;
}
.input-section-inner {
  display: inline-block;
  text-align: left;
  width: 33%;
}
.quote-input {
  width: 400px;
  height: 150px;
  margin-bottom: 20px;
}
.add-button {
  width: 150px;
  height: 30px;
  margin-bottom: 20px;
  color: white;
  background-color: #5372b0;
  border-radius: 5px;
}
h4 {
  text-align: left;
}
</style>
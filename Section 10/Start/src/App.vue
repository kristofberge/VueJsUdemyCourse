<template>
  <div class="container">
    <quote-header></quote-header>
    <quote-input></quote-input>
    <div class="row">
      <single-quote v-for="quote in quotes" :key="quote">{{quote}}</single-quote>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import NewQuote from './components/NewQuote.vue';
import Quote from "./components/Quote.vue";
export default {
  components: {
    quoteHeader: Header,
    quoteInput: NewQuote,
    singleQuote: Quote
  },
  data() {
    return {
      quotes: ["A thoughtful quote", "An interesting quote", "A stupid quote", "A quote that's a bit longer than the other ones"]
    };
  }
};
</script>

<style scoped>

</style>

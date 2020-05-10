<template>
  <div class="container">
    <quote-header 
      :maxValue="maxQuotes"
      :currentValue="currentValue"
      ></quote-header>
    <quote-input :onAddQuoteClicked="addNewQuote"></quote-input>
    <div class="row">
      <single-quote 
        v-for="(quote, index) in quotes" 
        :key="index" 
        @click.native="onQuoteClicked(index)">{{quote}}</single-quote>
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
      maxQuotes: 10,
      quotes: ["A thoughtful quote", "An interesting quote", "A stupid quote", "A quote that's a bit longer than the other ones"]
    };
  },
  methods: {
    addNewQuote(quote) {
      if (this.quotes.length < 10) {
        this.quotes.push(quote);
      }
      else {
        alert("Maximum quotes reached.");
      }
    },
    onQuoteClicked(index) {
      this.quotes.splice(index, 1);
    }
  },
  computed: {
    currentValue() {
      return this.quotes.length;
    }
  }
};
</script>

<style scoped>

</style>

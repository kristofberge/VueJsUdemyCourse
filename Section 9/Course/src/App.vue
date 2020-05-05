<template>
  <div class="container">
    <div class="row">
      <button @click="selectedComponent = 'app-quote'">Quote</button>
      <button @click="selectedComponent = 'app-author'">Author</button>
      <button @click="selectedComponent = 'app-new'">New</button>
      <hr />
      <!-- <app-quote>
                <h2 slot="title">{{ quoteTitle }}</h2>
                <p slot="content">A great quote</p>
      </app-quote>-->
      <keep-alive>
        <component :is="selectedComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";
export default {
  data() {
    return {
      quoteTitle: "The quote",
      selectedComponent: "app-quote"
    };
  },
  components: {
    appQuote: Quote,
    appAuthor: Author,
    appNew: New
  }
};
</script>

<style>
</style>

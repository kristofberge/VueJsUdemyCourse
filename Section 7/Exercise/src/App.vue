<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <overview></overview>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from './components/shared/Header.vue';
import Overview from './components/server/Overview.vue';
import Footer from './components/shared/Footer.vue';
export default {
    components: {
        appHeader: Header,
        Overview,
        'app-footer': Footer
    }
}
</script>

<style>

</style>

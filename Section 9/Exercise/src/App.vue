<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedColor = 'blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedColor = 'green'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedColor = 'red'">Load Red Template</button>
                <hr>
                <component :is="selectedLayout">
                    <h3 slot="title">A colorful title</h3>
                    <p slot="content">This content changes color</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
        },
        data() {
            return {
                selectedColor: 'blue'
            }
        },
        computed: {
            selectedLayout() {
                return 'app-' + this.selectedColor;
            }
        }
    }
</script>

<style>
h3 {
  text-align: center;
}

.content {
    text-align: left;
}
</style>

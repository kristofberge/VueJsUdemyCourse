<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li 
                class="list-group-item" 
                v-for="server in servers" 
                :key="server.id"
                @click="onServerClicked(server)">
                Server #{{ server.id }} - {{ server.status }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            servers: [
                { id: 1, status: 'Normal' },
                { id: 2, status: 'Critical' },
                { id: 3, status: 'Down' },
                { id: 4, status: 'Unknown' },
                { id: 5, status: 'Normal' },
            ],
        }
    },
    methods: {
        onServerClicked(server) {
            this.$emit('serverSelected', server);
        }
    }
}
</script>

<style>

</style>

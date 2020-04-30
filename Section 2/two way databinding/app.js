new Vue({
    el: '#app',
    data: {
        name: "",
        counter: 0,
        secondCounter: 0
    },
    methods: {
        result: function () {
            console.log('method');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller or equal to 5'
        }
    },
    computed: {
        computedResult: function() {
            console.log('computed');
            return this.counter > 5 ? 'Greater than 5' : 'Smaller or equal to 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function () {
                vm.counter = 0;
            }, 2000)
        }
    }
});
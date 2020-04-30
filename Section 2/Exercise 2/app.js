new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        showAlert: function () {
            alert("You clicked the button.");
        },
        updateValue: function (event) {
            this.value = event.target.value;
        }
    }
});
new Vue({
    el: '#app',
    data: {
        attachRed: false,
        color: 'green',
        color2: 'gray',
        width: 100
    },
    computed: {
        divClasses: function () {
            return {
                red: this.attachRed,
                blue: !this.attachRed
            }
        },
        myStyle: function () {
            return {
                backgroundColor: this.color,
                width: this.width + 'px'
            }
        }
    }
});
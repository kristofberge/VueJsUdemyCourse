new Vue({
  el: '#exercise',
  data: {
    flag: true,
    width: 'long',
    height: 'short',
    mood: 'sunny',
    border: 'thickBorder',
    classes: 'highlight',
    classes2: 'shrink',
    borderFlag: 'false',
    moodStyle: 'neutral',
    progress: 0
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.flag = !vm.flag;
      }, 300);
    },
    startProgress: function () {
      var vm = this;
      setInterval(function () {
        if (vm.progress == 200) {
          vm.progress = -1;
        }
        vm.progress++;
      }, 10);
    },
    happy: function () {
      return {
        backgroundColor: 'fuchsia !important',
        width: '400px !important',
        height: '100px !important',
        border: '2px solid royalblue !important'
      }
    },
    sad: function () {
      return {
        backgroundColor: 'grey !important',
        width: '100px !important',
        height: '300px !important',
        border: '5px solid black !important'
      }
    },
    neutral: function () {
      return {
        backgroundColor: 'blue !important',
        width: '200px !important',
        height: '200px !important',
        border: '3px solid green !important'
      }
    }
  },
  computed: {
    switchStyle: function () {
      return {
        highlight: this.flag,
        shrink: !this.flag
      }
    },
    myStyle: function () {
      if (this.moodStyle == 'happy') {
        return this.happy();
      }
      else if (this.moodStyle == 'sad') {
        return this.sad();
      }
      else {
        return this.neutral();
      }
    },

  }
});

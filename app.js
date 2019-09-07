// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      mrChangeColor: false,
      mrChangeLength: false
    };
  },
  methods: {},
  computed: {
    compClasses() {
      return {
        changeColor: this.mrChangeColor,
        changeLength: this.mrChangeLength
      };
    }
  }
});

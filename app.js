// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      age: 30,
      x: 0,
      y: 0
    };
  },
  methods: {
    add(inc) {
      this.age += inc;
    },
    subtract(dec) {
      this.age -= dec;
    },
    updateXY(event) {
      // console.log(event);
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    handleClick() {
      alert('hello');
    }
  }
});

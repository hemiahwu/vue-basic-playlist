// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      health: 100,
      ended: false
    };
  },
  methods: {
    punch() {
      this.health -= 10;
      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
    }
  },
  computed: {}
});

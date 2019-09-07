// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      a: 0,
      b: 0,
      age: 32
    };
  },
  methods: {
    // addToA() {
    //   console.log('addToA');
    //   return this.a + this.age;
    // },
    // addToB() {
    //   console.log('addToB');
    //   return this.b + this.age;
    // }
  },
  computed: {
    addToA() {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});

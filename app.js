// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      name: '米斯特吴',
      wechat: '27732357'
    };
  },
  methods: {
    // greet: function() {
    //   return 'Good night ' + this.name;
    // }

    greet(time) {
      // return 'Good night ' + this.name;
      return `Good ${time} ${this.name}`;
    },
    haveLunch() {
      return `吃过午饭了吗?`;
    }
  }
});

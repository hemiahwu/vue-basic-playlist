// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      name: '',
      age: 32
    };
  },
  methods: {
    logName() {
      console.log('正在输入名字...');
    },
    logAge() {
      console.log('正在输入年龄...');
    }
  }
});

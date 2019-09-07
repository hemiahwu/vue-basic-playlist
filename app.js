// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {};
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

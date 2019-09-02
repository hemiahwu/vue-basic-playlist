// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      name: '米斯特吴',
      wechat: '27732357',
      website: 'https://www.baidu.com',
      websiteTag: '<a href="https://www.taobao.com">taobao</a>'
    };
  },
  methods: {
    greet(time) {
      return `Good ${time} ${this.name}`;
    }
  }
});

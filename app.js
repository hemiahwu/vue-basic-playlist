// 实例化vue对象
new Vue({
  el: '#vue-app', // element
  data() {
    return {
      characters: ['小猪佩奇', '小羊苏西', '小兔黎贝卡', '大象艾米丽'],
      users: [
        { name: '小猪佩奇', age: 3 },
        { name: '小羊苏西', age: 3 },
        { name: '小兔黎贝卡', age: 4 },
        { name: '大象艾米丽', age: 5 }
      ]
    };
  },
  methods: {},
  computed: {}
});

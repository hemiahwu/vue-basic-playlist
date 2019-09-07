// 实例化vue对象
const one = new Vue({
  el: '#vue-app-one', // element
  data() {
    return {
      title: 'this is app one!!'
    };
  },
  methods: {},
  computed: {
    greet() {
      return 'Hello 米修在线';
    }
  }
});

const two = new Vue({
  el: '#vue-app-two', // element
  data() {
    return {
      title: 'this is app two'
    };
  },
  methods: {
    changeAppOneTitle() {
      one.title = '这是APP one的title';
    }
  },
  computed: {
    greet() {
      return 'Hello 米斯特吴';
    }
  }
});

two.title = '这是app two的title内容';

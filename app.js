new Vue({
  el: '#vue-app',
  data() {
    return {
      todos: [],
      todo: {
        title: '',
        completed: false
      }
    };
  },
  mounted() {
    // fetch api请求接口
    // fetch('http://jsonplaceholder.typicode.com/todos')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(todos => {
    //     this.todos = todos;
    //   });

    // axios get请求接口
    axios.get('http://jsonplaceholder.typicode.com/todos').then(res => {
      this.todos = res.data;
    });
  },
  methods: {
    onSubmit() {
      // console.log(this.todo);

      // axios post
      axios
        .post('http://jsonplaceholder.typicode.com/todos', this.todo)
        .then(res => {
          // console.log(res.data);
          this.todos.unshift(res.data);
        });

      // fetch('http://jsonplaceholder.typicode.com/todos', {
      //   method: 'POST',
      //   body: JSON.stringify(this.todo),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // })
      //   .then(res => {
      //     return res.json();
      //   })
      //   .then(todo => {
      //     // console.log(todo);
      //     this.todos.unshift(todo);
      //   });
    }
  }
});

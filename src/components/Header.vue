<template>
  <div @click="changeTitle" class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      // title: "Vue Components Demo"
    };
  },
  methods: {
    changeTitle() {
      // this.title = "米斯特吴修改了title值";
      // 注册事件  参数1: 事件名称  参数2...: 值
      this.$emit("titleChange", "米斯特吴通过emit到app.vue修改title值");
    }
  }
};
</script>

<style scoped>
.header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
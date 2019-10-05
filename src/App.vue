<template>
  <div id="app">
    <h1>App.vue</h1>
    <!-- 3.调用组件 -->
    <Users />
  </div>
</template>

<script>
// 1.局部调用组件
import Users from "./components/Users";
export default {
  name: "app",
  // 2.注册组件
  components: {
    Users
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

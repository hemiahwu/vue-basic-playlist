<template>
  <div id="app">
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

<style>
</style>

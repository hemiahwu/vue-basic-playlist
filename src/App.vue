<template>
  <div id="app">
    <Header />
    <!-- 3.调用组件 -->
    <Users />
    <Footer />
  </div>
</template>

<script>
// 1.局部引用组件
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from "./components/Footer";

export default {
  name: "app",
  // 2.注册组件
  components: {
    Header,
    Users,
    Footer
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

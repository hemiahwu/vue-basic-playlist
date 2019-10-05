<template>
  <div id="app">
    <Header />
    <!-- 3.调用组件 -->
    <Users :users="users" />
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
  data() {
    return {
      users: [
        { name: "米斯特吴1", wechat: "27732357", show: false },
        { name: "米斯特吴2", wechat: "27732357", show: false },
        { name: "米斯特吴3", wechat: "27732357", show: false },
        { name: "米斯特吴4", wechat: "27732357", show: false },
        { name: "米斯特吴5", wechat: "27732357", show: false },
        { name: "米斯特吴6", wechat: "27732357", show: false },
        { name: "米斯特吴7", wechat: "27732357", show: false }
      ]
    };
  },
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

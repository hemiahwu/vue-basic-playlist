<template>
  <div id="app">
    <Header @titleChange="updateTitle" :title="title" />
    <!-- 3.调用组件 -->
    <!-- 属性传值: 值有两种情况: 1.传值 2.传引用(对象 数组) -->
    <Users :users="users" />
    <hr />
    <Users :users="users" />
    <Footer :title="title" />
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
      ],
      title: "Vue 米斯特吴"
    };
  },
  // 2.注册组件
  components: {
    Header,
    Users,
    Footer
  },
  methods: {
    updateTitle(updatedTitle) {
      // console.log(updatedTitle);
      this.title = updatedTitle;
    }
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

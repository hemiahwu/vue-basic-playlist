<template>
  <div id="app">
    <FormHelper>
      <div slot="title">
        <h2>{{title}}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div slot="text">
        <p>这个是文本内容</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, ut?</p>
      </div>
    </FormHelper>
  </div>
</template>

<script>
import FormHelper from "./components/FormHelper";
export default {
  name: "app",
  data() {
    return {
      title: "这个是title"
    };
  },
  // 2.注册组件
  components: {
    FormHelper
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

<template>
  <div id="app">
    <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <button @click="component = 'form-one'">show form one</button>
    <button @click="component = 'form-two'">show form two</button>
  </div>
</template>

<script>
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
export default {
  name: "app",
  data() {
    return {
      component: "form-two"
    };
  },
  // 2.注册组件
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>

<template>
  <!-- HTML结构: 只能有一个根标签 -->
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
// js部分 逻辑部分
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
/* css样式部分 */
</style>

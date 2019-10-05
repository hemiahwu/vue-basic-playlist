<template>
  <div class="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Vue Components Demo"
    };
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
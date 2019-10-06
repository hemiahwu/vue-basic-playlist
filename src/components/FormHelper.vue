<template>
  <div>
    <slot name="title"></slot>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, soluta?</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
h2 {
  background: lightgreen;
}
</style>
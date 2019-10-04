<template>
  <div class="users">
    <ul>
      <li v-for="(user,index) in users" :key="index">{{user}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ["小猪佩奇", "大象艾美莉", "小羊苏西"]
    };
  }
};
</script>

<style >
</style>
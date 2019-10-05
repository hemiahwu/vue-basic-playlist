<template>
  <div class="users">
    <h1>Users.vue</h1>
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

<style scoped>
h1 {
  color: green;
}
</style>
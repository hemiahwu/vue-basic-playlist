<template>
  <div class="users">
    <ul>
      <li @click="user.show = !user.show" v-for="(user,index) in users" :key="index">
        <h2>{{user.name}}</h2>
        <h3 v-show="user.show">{{user.wechat}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
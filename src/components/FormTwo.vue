<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>Form Two - Log In</h3>
        <p>随便写点东西</p>
      </div>
      <div slot="form-fields">
        <input type="text" placeholder="username" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">登录</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
import formHelper from "./FormHelper";

export default {
  components: {
    "form-helper": formHelper
  },
  data() {
    return {};
  },
  methods: {
    handleSubmit: function() {
      alert("thanks for logging in (form two)");
    }
  }
};
</script>

<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
}
</style>

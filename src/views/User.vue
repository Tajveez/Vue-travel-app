<template>
  <div>
    Welcome, {{ user }}
    <button @click="logOut()">Logout</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      user: store.user
    };
  },
  methods: {
    logOut() {
      store.user = false;
      const redirectPath = this.$route.query.redirect || "/";
      this.$router.push(redirectPath);
    }
  }
};
</script>

<style></style>

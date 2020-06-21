/* eslint-disable prettier/prettier */
<template>
  <div id="nav">
    <p class="logo">The Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.id" class="links">
        <router-link
          :to="{ name: 'Destination', params: { slug: destination.slug } }"
        >{{ destination.name }}</router-link>
      </li>
      <li class="links">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style>
#nav {
  display: flex;
  background: lavender;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: #42b983;
  font-weight: bold;
}
</style>

<template>
  <div>
    <h1>404: Not Found</h1>
    <p>
      Oops, we couldn't that page, try going
      <router-link :to="{ name: 'home' }">Home</router-link>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>

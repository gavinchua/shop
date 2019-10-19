<template>
  <router-link
    to="/"
    class="mr-5"
  >
    <img
      class="logo"
      alt="Logo"
      src="@/assets/img/logo.png"
    >
  </router-link>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="stylus">
.logo
  width 50px
  @media (min-width: 768px)
    width 80px
</style>

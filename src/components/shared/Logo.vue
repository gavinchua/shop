<template>
  <div class="logo">
    <img
      alt="Logo"
      src="@/assets/img/logo.png"
    >
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="stylus">
.logo
  img
    width 50px
    @media (min-width: 768px)
      width 80px
</style>

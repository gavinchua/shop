<template>
  <header>
    <div class="container flex items-center justify-between">
      <Logo />
      <Menu />
    </div>
  </header>
</template>

<script>
import Logo from '@/components/shared/Logo'
import Menu from '@/components/shared/Menu'

export default {
  name: 'AppHeader',
  components: {
    Logo,
    Menu
  }
}
</script>

<style lang="stylus">

</style>

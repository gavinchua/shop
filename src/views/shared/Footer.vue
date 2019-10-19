<template>
  <footer class="mt-10 mb-5">
    <div class="container md:flex">
      <div class="text-center md:w-1/2 md:text-left">
        &copy;<span v-text="getThisYear" />
        @gavin_chua
      </div>
      <div class="text-center md:w-1/2 md:text-right">
        <a
          href="https://github.com/gavinchua/shop"
          target="_blank"
        >Github</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    getThisYear: () => new Date().getFullYear()
  }
}
</script>

<style lang="stylus">

</style>

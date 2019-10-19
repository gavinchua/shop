<template>
  <div id="app">
    <vue-progress-bar />
    <Header />
    <main>
      <div class="container">
        <router-view :key="$route.fullPath" />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/views/shared/Header'
import Footer from '@/views/shared/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="stylus">
/* purgecss start ignore */
body
  @apply antialiased font-sans font-normal text-base text-black leading-normal relative
  button,
  .vnb-button
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer
    &:hover
      @apply bg-blue-700
  main
    min-height 65vh
  .container
    @apply mx-auto px-3
    h1
      @apply mb-5
    &__inner
      @apply relative px-4
    form
      @apply mt-10 mx-auto
      label
        @apply block text-gray-700 text-sm font-bold mb-2 mt-5
      input
        @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
        &:focus
          outline-none
          shadow-outline
      .error
        @apply text-red-500 text-xs italic
      button[type="submit"]
        @apply font-bold mt-8 py-2 px-4 rounded w-full
        &:enabled
          @apply bg-blue-500 text-white cursor-pointer
          &:hover
            @apply bg-blue-700
        &:disabled
          @apply bg-gray-600 text-gray-500 cursor-not-allowed
          &:hover
            @apply bg-gray-600
      small
        @apply block mt-4

.v--modal-overlay
  background rgba(10, 21, 43, .6)
  .v--modal
    border-radius 40px
    padding 2.25rem 3rem 1.25rem
  .btn-close
    @apply bg-blue-500 text-white cursor-pointer rounded-full flex items-center justify-center h-8 w-8 absolute
    top 1.5rem
    right 1.5rem
/* purgecss end ignore */
</style>

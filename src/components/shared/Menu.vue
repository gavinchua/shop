<template>
  <div class="ml-auto w-full">
    <template v-if="checkLogin">
      <vue-navigation-bar
        class="flex content-center"
        :options="navbarOptionsMember"
        @vnb-item-clicked="vnbItemClicked"
      />
    </template>
    <template v-else>
      <vue-navigation-bar
        class="flex content-center"
        :options="navbarOptions"
      />
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import '@/plugins/vue-navigation-bar'

import menuPublic from '@/mixins/menuPublic'
import menuMember from '@/mixins/menuMember'

export default {
  name: 'AppMenu',
  mixins: [
    menuPublic,
    menuMember
  ],
  data() {
    return {
      checkLogin: false
    }
  },
  computed: {
    ...mapGetters('appUser', [
      'getUserLogin'
    ])
  },
  mounted() {
    this.$store.watch(
      () => this.getUserLogin, (userLogin) => {
        this.checkLogin = userLogin
      }
    )
  },
  methods: {
    vnbItemClicked(text) {
      if (text === 'Log Out') {
        console.log('Logging out...') // eslint-disable-line no-console
        this.$store.dispatch('appUser/commitUserLogin', false)
        this.$router.push('home')
      }
    }
  }
}
</script>

<style lang="stylus">
/* purgecss start ignore */
.vnb
  &__collapse-button
    @apply m-0
    &:hover
      @apply bg-transparent
  &__menu-options
    &__option__link
      @apply px-2 py-4 font-semibold text-gray-600 text-base
      @media (min-width: 1024px)
        @apply text-lg
      &:hover
        @apply text-gray-900
    &--left
      padding-left 15px
      @media (min-width: 1024px)
        padding-left 30px
/* purgecss end ignore */
</style>

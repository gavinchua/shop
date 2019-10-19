<template>
  <div class="accountlist container__inner">
    <AccountListItem
      v-for="item in getUser"
      :key="item.id"
      :uid="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import AccountListItem from '@/components/account/AccountListItem'

export default {
  name: 'AccountList',
  components: {
    AccountListItem
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('appUser', [
      'getUser'
    ])
  }
}
</script>

<style scoped lang="stylus">
/* purgecss start ignore */
.paginate-links >>>
  transform translate(-50%,-50%)
  left 50%
  li
    cursor pointer
    padding 0 5px
    &.active
      font-weight bold
/* purgecss end ignore */
</style>

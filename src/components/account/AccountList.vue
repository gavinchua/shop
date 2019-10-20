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
  computed: {
    ...mapGetters('appUser', [
      'getUser'
    ])
  }
}
</script>

<style scoped lang="stylus">

</style>

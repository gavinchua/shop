<template>
  <div class="account">
    <h1>My Account</h1>
    <AccountList />
  </div>
</template>

<script>
import AccountList from '@/components/account/AccountList'

export default {
  name: 'Account',
  components: {
    AccountList
  }
}
</script>

<style lang="stylus">

</style>

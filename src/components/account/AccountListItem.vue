<template>
  <div class="accountlistitem">
    <div class="flex flex-wrap">
      <dl
        v-for="(val, name, i) in item"
        :key="i"
        class="w-full md:w-1/2"
      >
        <template v-if="name === 'password'">
          <dd>
            {{ name | uppercase }}
          </dd>
          <dt>
            <button @click="changePassword">
              Change Password
            </button>
          </dt>
        </template>
        <template v-else>
          <dd>
            {{ name | uppercase }}
          </dd>
          <dt>
            {{ val }}
          </dt>
        </template>
      </dl>
    </div>
    <ModalChangePassword :uid="uid" />
  </div>
</template>

<script>
import ModalChangePassword from '@/components/account/ModalChangePassword'

export default {
  name: 'AccountListItem',
  components: {
    ModalChangePassword
  },
  filters: {
    uppercase: function(v) {
      if (!v) {
        return ''
      }

      return v.toString().toUpperCase()
    }
  },
  props: {
    uid: {
      type: String,
      required: true
    },
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    changePassword() {
      this.$modal.show('modal-changePassword')
    }
  }
}
</script>

<style scoped lang="stylus">
.accountlistitem
  dl
    & + dl
      @apply mt-5
    dd
      @apply font-bold
    dt
      @apply break-words
</style>

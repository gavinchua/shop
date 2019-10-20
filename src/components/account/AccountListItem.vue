<template>
  <div class="accountlistitem">
    <div class="flex flex-wrap">
      <dl
        v-for="(val, name, i) in item"
        :key="i"
        class="w-full"
        :class="setClass(name)"
      >
        <template v-if="name === 'password'">
          <dt>
            {{ name | uppercase }}
          </dt>
          <dd>
            <button @click="changePassword">
              Change Password
            </button>
          </dd>
        </template>
        <template v-else>
          <dt>
            {{ name | uppercase }}
          </dt>
          <dd>
            {{ val }}
          </dd>
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
    setClass(name) {
      return (name !== 'about') ? 'md:w-1/2' : ''
    },
    changePassword() {
      this.$modal.show('modal-changePassword')
    }
  }
}
</script>

<style scoped lang="stylus">
.accountlistitem
  dl
    @media (min-width: 768px)
      @apply mb-5
    & + dl
      @apply mt-5
      @media (min-width: 768px)
        @apply mt-0
    dt
      @apply font-bold
    dd
      @apply break-words whitespace-pre-wrap
</style>

<template>
  <div class="login">
    <hgroup>
      <h1>
        Login
      </h1>
      <h6 class="mt-4">
        Please login with your username &amp; password
      </h6>
    </hgroup>
    <form
      class="max-w-xs"
      @submit.prevent="submit"
    >
      <label for="username">
        Username
      </label>
      <input
        id="username"
        ref="username"
        v-model.trim="$v.form.username.$model"
        type="text"
        placeholder="Username"
      >
      <div
        v-if="$v.form.username.$dirty"
        class="error"
      >
        <template v-if="!$v.form.username.required">
          Required.
        </template>
        <template v-if="!$v.form.username.minLength">
          Length must be at least 3 characters.
        </template>
      </div>
      <label for="password">
        Password
      </label>
      <input
        id="password"
        ref="password"
        v-model.trim="$v.form.password.$model"
        type="password"
        placeholder="Password"
      >
      <div
        v-if="$v.form.password.$error"
        class="error"
      >
        <template v-if="!$v.form.password.required">
          Required.
        </template>
        <template v-if="!$v.form.password.minLength">
          Length must be at least 3 characters.
        </template>
      </div>
      <button
        type="submit"
        :disabled="$v.$invalid"
      >
        Submit
      </button>
      <small>
        Login with any username &amp; password.
      </small>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      submitted: false
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      password: {
        required,
        minLength: minLength(3)
      }
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      this.$refs.username.focus()
    },
    submit() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      console.log('SUBMITTING DATA TO API :-)\n\n' + JSON.stringify(this.form)) // eslint-disable-line no-console
      this.sendFormData()
    },
    sendFormData() {
      // Find user with username & validate his password
      // If user found and his ID is 3522314150
      // API is invalid
      axios.get(`user/${this.form.username}`)
        .then((response) => {
          // this.$store.dispatch('appUser/commitUserLogin', true)
          // this.$store.dispatch('appUser/fetchAppUser', '3522314150')
          // this.$store.dispatch('appProducts/fetchAppProducts')
          // this.$router.push('market')
          console.log('LOGIN SUCCESS!! :-)\n\n', response)  // eslint-disable-line no-console
        })
        .catch((error) => {
          this.message = `
            There is an error logging in.
            UserID=${this.form.username} & Password=${this.form.password}
          `
          console.log(error)  // eslint-disable-line no-console
        })
      // API is invalid. For mockup purpose
      this.$store.dispatch('appUser/commitUserLogin', true)
      this.$store.dispatch('appUser/fetchAppUser', '3522314150')
      this.$store.dispatch('appProducts/fetchAppProducts')
      this.$router.push('market')
    }
  }
}
</script>

<style scoped lang="stylus">
hgroup
  @apply text-center
</style>

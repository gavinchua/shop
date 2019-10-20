<template>
  <div class="modal-changePassword">
    <modal
      name="modal-changePassword"
      :click-to-close="false"
      :adaptive="true"
      :scrollable="true"
      :width="600"
      :height="450"
    >
      <a
        class="btn-close"
        @click="closeModal"
      >
        <span>X</span>
      </a>
      <h2 class="mb-5 text-center">
        Change Password
      </h2>
      <form @submit.prevent="submit">
        <label for="npassword">
          New Password
        </label>
        <input
          id="npassword"
          ref="npassword"
          v-model.trim="$v.form.npassword.$model"
          type="password"
          placeholder="New Password"
        >
        <div
          v-if="$v.form.npassword.$error"
          class="error"
        >
          <template v-if="!$v.form.npassword.required">
            Required.
          </template>
          <template v-if="!$v.form.npassword.minLength">
            Length must be at least 3 characters.
          </template>
        </div>
        <label for="cpassword">
          Confirm New Password
        </label>
        <input
          id="cpassword"
          ref="cpassword"
          v-model.trim="$v.form.cpassword.$model"
          type="password"
          placeholder="Confirm New Password"
        >
        <div
          v-if="$v.form.cpassword.$error"
          class="error"
        >
          <template v-if="!$v.form.cpassword.sameAsPassword">
            Please ensure that the new passwords match.
          </template>
        </div>
        <button
          type="submit"
          :disabled="$v.$invalid"
        >
          Submit
        </button>
        <small class="error">
          {{ message }}
        </small>
      </form>
    </modal>
  </div>
</template>

<script>
import axios from 'axios'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'ModalChangePassword',
  props: {
    uid: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      message: '',
      form: {
        uid: this.uid,
        npassword: '',
        cpassword: ''
      },
      submitted: false
    }
  },
  validations: {
    form: {
      npassword: {
        required,
        minLength: minLength(3)
      },
      cpassword: {
        sameAsPassword: sameAs('npassword')
      }
    }
  },
  methods: {
    closeModal() {
      this.$modal.hide('modal-changePassword')
    },
    submit() {
      this.submitted = true
      this.$v.$touch()
      if (this.$v.$invalid) {
        return
      }

      console.log('SUBMITTING DATA TO API :-)\n\n' + JSON.stringify(this.form.uid)) // eslint-disable-line no-console
      this.sendFormData()
    },
    sendFormData() {
      // Find user with ID 3522314150 and update his password
      // API is invalid
      axios.post(`user/${this.form.uid}/password/${this.form.npassword}`)
        .then((response) => {
          this.message = 'Password changed successfully!'
          console.log('PASSWORD CHANGED SUCCESS!! :-)\n\n', response) // eslint-disable-line no-console
        })
        .catch((error) => {
          this.message = `
            There is an error changing your password.
            UserID=${this.form.uid} & Password=${this.form.npassword}
          `
          console.log(error)  // eslint-disable-line no-console
        })
    }
  }
}
</script>

<style scoped lang="stylus">

</style>

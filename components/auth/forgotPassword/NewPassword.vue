<template>
  <FormLayout class="new-pass">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Create new password
      </Heading>
      <p class="form-layout__text">
        Password must be 8 characters long and contain
        an uppercase, lowercase, digit, and special character
      </p>
    </template>
    <template #form>
      <form @submit.prevent="changePass">
        <Input
          v-for="(fieldObj, field) in form"
          :key="field"
          v-model="fieldObj.value"
          :type="fieldObj.rules.includes('password') ? 'password' : 'text'"
          :name="field"
          :label="fieldObj.label"
          :error="fieldObj.error"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
        <div v-if="!doPasswordsMatch" class="new-pass__pass-err">
          Passwords do not match
        </div>
        <Button class="form-layout__button">
          send a code
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'SendCode',
  props: {},
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
  },
  data: () => ({
    doPasswordsMatch: true,
    form: {
      password: {
        value: '',
        error: '',
        rules: ['required', 'password'],
        label: 'Password',
      },
      passwordConfirmed: {
        value: '',
        error: '',
        rules: ['required', 'password'],
        label: 'Confirm Password',
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    changePass() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      this.doPasswordsMatch = this.form.password.value === this.form.passwordConfirmed.value;
      if (!this.doPasswordsMatch) return;
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.new-pass {
  &__pass-err {
    color: $error-red;
    margin-top: -24px;
    margin-bottom: 16px;
  }
}
</style>
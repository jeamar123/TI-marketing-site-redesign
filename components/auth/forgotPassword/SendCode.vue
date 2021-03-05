<template>
  <FormLayout class="send-code">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Forgot Password
      </Heading>
      <p class="form-layout__text">
        We will send you a password reset code
      </p>
    </template>
    <template #form>
      <transition name="fade">
        <Error v-if="hasError" class="send-code__error">
          <template #header>
            Seems there was an issue sending your code
          </template>
          <template #text>
            <p v-if="errorMsg">
              {{ errorMsg }}
            </p>
            Please try again later or contact us at
            <a :href="`mailto:${config.currentEmail}`" class="form-layout__link">
              {{ config.currentEmail }}
            </a>
          </template>
        </Error>
      </transition>
      <form @submit.prevent="sendCode">
        <Input
          v-for="(fieldObj, field) in form"
          :key="field"
          v-model="fieldObj.value"
          :name="field"
          :label="fieldObj.label"
          :disabled="isLoading"
          :error="fieldObj.error"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
        <Button
          :is-loading="isLoading"
          class="form-layout__button"
        >
          send a code
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { mapActions } from 'vuex';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import config from '~/static/config';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';

export default {
  name: 'SendCode',
  props: {},
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
    Error,
  },
  data: () => ({
    form: {
      username: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Username',
      },
    },
    hasError: false,
    errorMsg: '',
    isLoading: false,
    config,
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    ...mapActions({
      sendPassCode: 'auth/forgotPassword',
    }),
    sendCode() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      this.isLoading = true;
      this.clearErrors();
      this.sendPassCode(this.form.username.value)
        .then(() => {
          this.$emit('code-sent', this.form.username.value);
        }).catch((err) => {
          this.hasError = true;
          this.errorMsg = err.message || '';
        })
        .finally(() => { this.isLoading = false; });
    },
    clearErrors() {
      if (this.hasError) this.hasError = false;
      if (this.errorMsg) this.errorMsg ='';
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.send-code {
  &__error {
    margin-bottom: 40px;
  }
}
</style>
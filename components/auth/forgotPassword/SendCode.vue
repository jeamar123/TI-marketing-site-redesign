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
      <form @submit.prevent="sendCode">
        <Input
          v-for="(fieldObj, field) in form"
          :key="field"
          v-model="fieldObj.value"
          :name="field"
          :label="fieldObj.label"
          :error="fieldObj.error"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
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
    form: {
      email: {
        value: '',
        error: '',
        rules: ['required', 'email'],
        label: 'Email',
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    sendCode() {},
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
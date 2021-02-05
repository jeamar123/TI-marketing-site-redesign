<template>
  <FormLayout>
    <template #info>
      <Heading color="white" class="form-layout__heading">
        How can we contact you?
      </Heading>
      <p class="form-layout__text">
        After registration, you will get access to the speaker panel and will be able to submit applications in two clicks
      </p>
    </template>
    <template #form>
      <form @submit.prevent="sendCfp">
        <Input
          v-for="field in formFields"
          :key="field"
          v-model="form[field].value"
          :name="field"
          :label="form[field].label"
          :error="form[field].error"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
        <Button class="form-layout__button">
          send
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'CfpSpeaker',
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
      phone: {
        value: '',
        error: '',
        rules: ['required', 'phone'],
        label: 'Phone',
      },
    },
  }),
  computed: {
    formFields() {
      return Object.keys(this.form);
    },
  },
  methods: {
    validateField,
    validateForm,
    clearError,
    transformForm,
    sendCfp() {
      const isValid = this.validateForm(this.form);

      if(!isValid) return;

      const data = this.transformForm(this.form);
      this.$emit('send-sfp', data);
    },
  },
};
</script>

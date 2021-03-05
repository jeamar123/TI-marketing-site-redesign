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
        <transition name="fade">
          <Error v-if="hasError" :style="{'margin-bottom': '40px'}">
            <template #header>
              Looks like there was an error submitting your call for papers
            </template>
            <template #text>
              Please try again or contact us directly at
              <a :href="`mailto:${config.currentEmail}`" class="error__link">
                {{ config.currentEmail }}
              </a>
            </template>
          </Error>
        </transition>
        <Input
          v-for="field in formFields"
          :key="field"
          v-model="form[field].value"
          :name="field"
          :label="form[field].label"
          :disabled="isLoading"
          :error="form[field].error"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
        <Button
          :is-loading="isLoading"
          class="form-layout__button"
        >
          send
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import config from '~/static/config';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';

export default {
  name: 'CfpSpeaker',
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
    Error,
  },
  data: () => ({
    config,
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
      this.$emit('send-cfp', data);
    },
  },
};
</script>

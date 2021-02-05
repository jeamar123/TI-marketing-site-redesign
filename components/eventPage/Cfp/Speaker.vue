<template>
  <FormLayout class="cfp-speaker">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Let's introduce yourself
      </Heading>
      <p class="form-layout__text">
        If you have already participated in our conferences, you can
        <a
          :href="`${baseUrl}/manager/#/speaker`"
          target="_blank"
          class="form-layout__link"
        >apply</a> through the cabinet
      </p>
    </template>
    <template #form>
      <form @submit.prevent="goToTalk">
        <Input
          v-for="field in formFields"
          :key="field"
          v-model="form[field].value"
          :name="field"
          :label="form[field].label"
          :error="form[field].error"
          :is-multiline="form[field].isMultiline"
          :rows="form[field].rows"
          @blur="validateField(field, form)"
          @input="clearError(field, form)"
        />
        <Button class="form-layout__button">
          next
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { mapState } from 'vuex';
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
      first_name: {
        value: '',
        error: '',
        rule: ['required'],
        label: 'First Name',
      },
      last_name: {
        value: '',
        error: '',
        rule: ['required'],
        label: 'Last Name',
      },
      organization: {
        value: '',
        error: '',
        rule: ['required'],
        label: 'Organization',
      },
      position: {
        value: '',
        error: '',
        rule: ['required'],
        label: 'Position',
      },
      bio: {
        value: '',
        error: '',
        rule: ['required'],
        label: 'Bio',
        isMultiline: true,
        rows: 4,
      },
    },
  }),
  computed: {
    ...mapState([
      'baseUrl',
    ]),
    formFields() {
      return Object.keys(this.form);
    },
  },
  methods: {
    validateField,
    validateForm,
    clearError,
    goToTalk() {
      const isValid = this.validateForm(this.form);
      console.log(isValid);
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.cfp-speaker {
  @media (min-width: $media-md) {
    &__inputs-wrapper {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);

      input {
        width: 100%;
      }
    }
  }
}
</style>
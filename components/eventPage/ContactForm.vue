<template>
  <GenericSection class="contacts-form">
    <transition-group name="fade">
      <Success v-if="isSent" key="contscts-success-msg">
        We will answer you as soon as possible
      </Success>
      <div
        v-else
        key="contacts-form"
        class="contacts-form__wrapper"
      >
        <Heading
          color="white"
          text-align="center"
          class="contacts-form__heading"
        >
          Contact us
        </Heading>
        <form class="contacts-form__form" @submit.prevent="contactUs">
          <transition name="fade">
            <Error v-if="hasError" class="contacts-form__error">
              <template #header>
                Looks like there was an error
              </template>
              <template #text>
                Please contact us directly at
                <a href="mailto:info@exploitcon.com" class="error__link">
                  info@exploitcon.com
                </a>
              </template>
            </Error>
          </transition>
          <Input
            v-for="(fieldObj, fieldName) in form"
            :key="fieldName"
            v-model="fieldObj.value"
            :name="fieldName"
            :label="fieldObj.label"
            :disabled="isLoading"
            :error="fieldObj.error"
            :is-multiline="fieldObj.isMultiline"
            :rows="fieldObj.rows"
            @blur="validateField(fieldName, form)"
            @input="clearError(fieldName, form)"
          />
          <Button
            :is-loading="isLoading"
            class="contacts-form__button"
          >
            submit
          </Button>
        </form>
      </div>
    </transition-group>
  </GenericSection>
</template>

<script>
import { mapActions } from 'vuex';
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';
import Success from '~/components/common/Success';

export default {
  name: 'ContactsForm',
  props: {},
  components: {
    GenericSection,
    Heading,
    Input,
    Button,
    Error,
    Success,
  },
  data: () => ({
    form: {
      name: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Name',
      },
      email: {
        value: '',
        error: '',
        rules: ['required', 'email'],
        label: 'Email',
      },
      message: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Message',
        isMultiline: true,
        rows: 4,
      },
    },
    hasError: false,
    isSent: false,
    isLoading: false,
  }),
  computed: {},
  methods: {
    ...mapActions({
      'POST': 'crud/POST',
    }),
    validateField,
    validateForm,
    clearError,
    transformForm,
    contactUs() {
      this.hasError = false;
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      const formToSend = {
        ...this.transformForm(this.form),
        subject: `Exploit Contact Us: ${this.$route.params.event}`,
      };

      this.isLoading = true;
      this.POST({ route: '/public/feedback', data: formToSend })
        .then(() => { this.isSent = true; })
        .catch(() => { this.hasError = true; })
        .finally(() => { this.isLoading = false; });
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.contacts-form {
  &__heading {
    margin-bottom: 24px;
  }

  &__button {
    width: 100%;
  }

  &__error {
    margin-bottom: 40px;
  }

  @media (min-width: $media-xs) {
    &__heading {
      margin-bottom: 64px;
    }

    &__form {
      max-width: 448px;
      margin: 0 auto;
    }
  }

  @media (min-width: $media-md) {
    &__wrapper {
      display: flex;
      justify-content: space-between;
    }

    &__heading {
      margin-bottom: 0;
      margin-right: 24px;
      text-align: left !important;
    }

    &__form {
      width: 448px;
      margin: 0;
    }
  }
}
</style>
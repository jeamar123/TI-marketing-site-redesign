<template>
  <GenericSection class="volunteering">
    <transition-group name="fade">
      <Success key="volunteering-success-msg" v-if="isSent">
        We will consider your volunteering request and answer you as soon as possible
      </Success>
      <div key="volunteering-form" class="volunteering__wrapper" v-else>
        <Heading
          color="white" 
          class="volunteering__heading"
        >
          Interested in
          <br />
          volunteering?
        </Heading>
        <form
          @submit.prevent="applyVolunteering" 
          class="volunteering__form"
        >
          <transition name="fade">
            <Error v-if="hasError" class="volunteering__error">
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
            @blur="validateField(fieldName, form)"
            @input="clearError(fieldName, form)"
          />
          <Button
            :is-loading="isLoading"
            class="volunteering__submit"
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
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';
import Error from '~/components/common/Error';
import Success from '~/components/common/Success';

export default {
  name: 'Volunteering',
  props: {},
  components: {
    GenericSection,
    Heading,
    Button,
    Input,
    Error,
    Success,
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
    applyVolunteering() {
      this.hasError = false;
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      const formToSend = {
        email: this.form.email.value,
        message: 'Exploit Volunteer',
        subject: 'Exploit Volunteer',
        name: 'Volunteer',
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

.volunteering {
  padding-bottom: 40px;

  &__heading {
    margin-bottom: 26px;
  }

  &__submit {
    width: 100%;
  }

  &__error {
    margin-bottom: 40px;
  }

  @media (min-width: $media-xs) {
    &__form {
      max-width: 448px;
      margin: 0 auto;
    }
  }

  @media (min-width: $media-sm) {
    padding: 290px 20%;

    &__form {
      width: 100%;
      max-width: unset;
      margin: 0;
    }

    &__heading {
      text-align: center !important;
      margin-bottom: 64px;
    }
  }

  @media (min-width: $media-md) {
    padding: 268px 24px;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &__heading {
      text-align: left !important;
      margin-bottom: 0;
      margin-right: 80px;
    }

    &__form {
      flex-grow: 0;
      max-width: 480px;
    }
  }

  @media (min-width: $media-lg) {
    padding: 348px 20% 274px 20%;

    &__heading {
      margin-right: 24px;
    }

    &__form {
      max-width: 520px;
    }
  }
}
</style>
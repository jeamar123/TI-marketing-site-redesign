<template>
  <GenericSection class="sign-in">
    <FormLayout>
      <template #info>
        <Heading color="white" class="form-layout__heading">
          Sign in
        </Heading>
        <p class="form-layout__text">
          If you already have an account, you can 
          <router-link to="/login" class="form-layout__link"> login</router-link>.
          Also you can use social media for sign up to conference.
          <br/>
          By clicking Sign In, you are indicating that you have read and acknowledge the
          <router-link to="/" class="form-layout__link">Terms of Service</router-link> and
          <router-link to="/" class="form-layout__link">Privacy Notice</router-link>.
        </p>
        <ul class="sign-in__social">
          <li class="sign-in__social-item">
            <a
              href="#"
              aria-label="Log in with Google"
              class="sign-in__social-link"
            >
              <svg-icon
                name="google"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="sign-in__social-item">
            <a
              href="#"
              aria-label="Log in with Facebook"
              class="sign-in__social-link"
            >
              <svg-icon
                name="facebook-bg"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="sign-in__social-item">
            <a
              href="#"
              aria-label="Log in with Twitter"
              class="sign-in__social-link"
            >
              <svg-icon
                name="twitter"
                width="24"
                height="20"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="sign-in__social-item">
            <a
              href="#"
              aria-label="Log in with Linkedin"
              class="sign-in__social-link"
            >
              <svg-icon
                name="linkedin-bg"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
        </ul>
      </template>
      <template #form>
        <div v-if="isSignInSuccessfull" class="sign-in__success">
          <Heading type="h4" color="white">
            Sign In was successfull!
          </Heading>
          <p>
            Please check your email for a verification link
          </p>
          <p>
            <router-link to="/" class="form-layout__link">
              Go to main page
            </router-link>
          </p>
          <p>
            <router-link to="/login" class="form-layout__link">
              Login</router-link> with your created account
          </p>
        </div>
        <template v-else>
          <transition name="fade">
            <Error v-if="hasError" class="sign-in__error">
              <template #header>
                {{ errorMsg || 'Seems there was an issue with your sign up' }}
              </template>
              <template #text>
                Please try again later or contact us at
                <a href="mailto:info@exploitcon.come" class="form-layout__link">
                  info@exploitcon.com
                </a>
              </template>
            </Error>
          </transition>
          <form @submit.prevent="signIn">
            <Input
              v-for="(fieldProps, field) in form"
              :key="field"
              v-model="fieldProps.value"
              :type="fieldProps.rules.includes('password') ? 'password' : 'text'"
              :name="field"
              :label="fieldProps.label"
              :loading="isLoading"
              :error="fieldProps.error"
              @blur="validateField(field, form)"
              @input="clearError(field, form)"
            />
            <div v-if="!doPasswordsMatch" class="sign-in__pass-err">
              Passwords do not match
            </div>
            <Button
              :is-loading="isLoading"
              class="form-layout__button"
            >
              sign in
            </Button>
          </form>
        </template>
      </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import { mapActions } from 'vuex';
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';

export default {
  name: 'SignIn',
  props: {
    GenericSection,
    FormLayout,
    Heading,
    Input,
    Button,
    Error,
  },
  components: {},
  data: () => ({
    doPasswordsMatch: true,
    isSignInSuccessfull: false,
    hasError: false,
    isLoading: false,
    errorMsg: '',
    form: {
      username: {
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
    ...mapActions({
      register: 'auth/signUp',
    }),
    transformForm,
    validateField,
    validateForm,
    clearError,
    signIn() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      this.doPasswordsMatch = this.form.password.value === this.form.passwordConfirmed.value;
      if (!this.doPasswordsMatch) return;

      const creds = this.transformForm(this.form);
      delete creds.passwordConfirmed;

      this.isLoading = true;
      this.register(creds).then(() => {
        this.clearErrors();
        this.isSignInSuccessfull = true;
      }).catch((err) => {
        this.hasError = true;
        this.errorMsg = err.message || '';
      })
      .finally(() => { this.isLoading = false; });
    },
    clearErrors() {
      if (this.hasError) this.hasError = false;
      if (this.errorMsg) this.errorMsg = '';
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.sign-in {
  padding-top: 78px;
  padding-bottom: 32px;
  min-height: 100vh;

  &__social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  }

  &__social-item {
    margin-right: 24px;

    &:last-child {
      margin-right: 0;
    }
  }

  &__social-link {
    transition: color 0.3s, opacity 0.3s;

    &:hover {
      color: $accent-red;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__pass-err {
    color: $error-red;
    margin-top: -24px;
    margin-bottom: 16px;
  }

  &__success {
    padding: 0 52px;
    text-align: center;

    .heading {
      text-align: center !important;
    }
  }

  &__error {
    margin-bottom: 40px;
  }

  @media (min-width: $media-sm) {
    display: flex;
    align-items: center;
    padding-top: 230px;
    padding-bottom: 230px;

    &__social {
      justify-content: flex-start;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 138px;
    padding-bottom: 62px;
  }

  @media (min-width: $media-lg) {
    padding-top: 240px;
    padding-bottom: 240px;
  }
}
</style>
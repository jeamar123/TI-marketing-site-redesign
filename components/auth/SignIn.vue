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
        <form @submit.prevent="signIn">
          <Input
            v-for="(fieldProps, field) in form"
            :key="field"
            v-model="fieldProps.value"
            :name="field"
            :label="fieldProps.label"
            :error="fieldProps.error"
            @blur="validateField(field, form)"
            @input="clearError(field, form)"
          />
          <Button class="form-layout__button">
            sign in
          </Button>
        </form>
      </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'SignIn',
  props: {
    GenericSection,
    FormLayout,
    Heading,
    Input,
    Button,
  },
  components: {},
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
      password: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Password',
      },
      passwordConfirmed: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Confirm Password',
      },
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
    signIn() {},
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
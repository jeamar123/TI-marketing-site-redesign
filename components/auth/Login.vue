<template>
  <GenericSection class="login">
    <FormLayout>
      <template #info>
        <Heading color="white" class="form-layout__heading">
          Login
        </Heading>
        <p class="form-layout__text">
          If you haven’t account, you can 
          <router-link to="/sign-in" class="form-layout__link"> create it</router-link>.
          Also you can use social media for sign up to conference
          <br />
          If you forgot your password, here you can
          <router-link to="/forgot-password" class="form-layout__link">change it</router-link>.
        </p>
        <ul class="login__social">
          <li class="login__social-item">
            <a
              href="#"
              aria-label="Log in with Google"
              class="login__social-link"
            >
              <svg-icon
                name="google"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="login__social-item">
            <a
              href="#"
              aria-label="Log in with Facebook"
              class="login__social-link"
            >
              <svg-icon
                name="facebook-bg"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="login__social-item">
            <a
              href="#"
              aria-label="Log in with Twitter"
              class="login__social-link"
            >
              <svg-icon
                name="twitter"
                width="24"
                height="20"
                fill="currentColor"
              />
            </a>
          </li>
          <li class="login__social-item">
            <a
              href="#"
              aria-label="Log in with Linkedin"
              class="login__social-link"
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
        <form @submit.prevent="logIn">
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
            login
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
  name: 'Login',
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
    },
  }),
  computed: {},
  methods: {
    validateField,
    validateForm,
    clearError,
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.login {
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

    &__social {
      justify-content: flex-start;
    }
  }
}
</style>
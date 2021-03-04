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
          <transition name="fade">
            <Error v-if="hasError" class="login__error">
              <template #header>
                {{ errorHeader }}
              </template>
              <template #text>
                <template v-if="isWrongPass">
                  Double-check your username and password. You may have used social media to login
                </template>
                <template v-else-if="isUnconfirmed">
                  Check your email for verification link.
                  <button class="error__link" @click="resendVerification">Click here</button>, if you haven’t verification link.
                </template>
                <template v-else-if="isUnknownErr || isEmailError">
                  Please try again or contact us at
                  <a :href="'mailto:info@exploitcon.com'" class="error__link">
                    info@exploitcon.com
                  </a>
                </template>
              </template>
            </Error>
          </transition>
          <Input
            v-for="(fieldProps, field) in form"
            :key="field"
            v-model="fieldProps.value"
            :type="field === 'password' ? 'password' : 'text'"
            :name="field"
            :label="fieldProps.label"
            :error="fieldProps.error"
            :loading="isLoading"
            @blur="validateField(field, form)"
            @input="clearError(field, form)"
          />
          <Button
            :is-loading="isLoading"
            class="form-layout__button"
          >
            login
          </Button>
          <router-link to="/forgot-password" class="form-layout__link">Forgot a password?</router-link>
        </form>
      </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';

export default {
  name: 'Login',
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
    form: {
      username: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'User Name',
      },
      password: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Password',
      },
    },
    hasError: false,
    isWrongPass: false,
    isUnconfirmed: false,
    isUnknownErr: false,
    isEmailError: false,
    isLoading: true,
  }),
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName',
      backPath: 'getBackPath',
    }),
    errorHeader() {
      let text = 'Seems there was an issue';

      if (this.isWrongPass) text = 'Incorrect username or password';
      if (this.isUnconfirmed) text = 'Account hasn’t been confirmed';
      if (this.isEmailError) text = 'Seems there was an issue resending verification link';

      return text;
    },
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn',
      resendEmail: 'auth/resendSignUp',
      GET: 'crud/GET',
    }),
    ...mapMutations([
      'setUser',
    ]),
    validateField,
    validateForm,
    clearError,
    logIn() {
      const isValid = this.validateForm(this.form);

      if (!isValid) return;
      
      this.isLoading = true;
      this.signIn(transformForm(this.form))
        .then(() => {
          this.clearErrors();
          this.GET({
            authed: true,
            route: `/profile/${this.userName}`
          }).then(result => {
            this.setUser(result);
            this.$router.push(this.backPath);
          });
        })
        .catch(err => {
          if (err.code) {
            if (err.code === "NotAuthorizedException") this.isWrongPass = true;
            else if (err.code === "UserNotConfirmedException") this.isUnconfirmed = true;
          } else {
            this.isUnknownErr = true;
          }

          this.hasError = true;
        })
        .finally(() => { this.isLoading = false; });
    },
    clearErrors() {
      if (this.hasError) {
        this.hasError = false;

        if (this.isWrongPass) this.isWrongPass = false;
        if (this.isUnconfirmed) this.isUnconfirmed = false;
        if (this.isUnknownErr) this.isUnknownErr = false;
        if (this.isEmailError) this.isEmailError = false;
      }
    },
    resendVerification() {
      this.clearErrors();
      this.resendEmail().catch(() => {
        this.hasError = true;
        this.isEmailError = true;
      });
    },
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

  &__error {
    margin-bottom: 40px;
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
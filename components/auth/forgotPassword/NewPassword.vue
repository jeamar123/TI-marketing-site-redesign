<template>
  <FormLayout class="new-pass">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Create new password
      </Heading>
      <p class="form-layout__text">
        Password must be 8 characters long and contain
        an uppercase, lowercase, digit, and special character
      </p>
    </template>
    <template #form>
      <div v-if="isChangeSuccessfull" class="new-pass__success">
        <Heading type="h4" color="white">
          Your password changed successfully!
        </Heading>
        <p>
          <router-link to="/login" class="form-layout__link">
            Login</router-link> with your new password
        </p>
        <p>
          <router-link to="/" class="form-layout__link">
            Go to main page
          </router-link>
        </p>
      </div>
      <template v-else>
        <transition name="fade">
          <Error v-if="hasError" class="new-pass__error">
            <template #header>
              Seems there was an issue with changing your password
            </template>
            <template #text>
              <p v-if="errorMsg">
                {{ errorMsg }}
              </p>
              Please try again later or contact us at
              <a href="mailto:info@arctic-con.com" class="form-layout__link">
                info@arctic-con.com
              </a>
            </template>
          </Error>
        </transition>
        <form @submit.prevent="submitChange">
          <Input
            v-for="(fieldObj, field) in form"
            :key="field"
            v-model="fieldObj.value"
            :type="fieldObj.rules.includes('password') ? 'password' : 'text'"
            :name="field"
            :label="fieldObj.label"
            :error="fieldObj.error"
            @blur="validateField(field, form)"
            @input="clearError(field, form)"
          />
          <div v-if="!doPasswordsMatch" class="new-pass__pass-err">
            Passwords do not match
          </div>
          <Button class="form-layout__button">
            send a code
          </Button>
        </form>
      </template>
    </template>
  </FormLayout>
</template>

<script>
import { mapActions } from 'vuex';
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';
import Error from '~/components/common/Error';

export default {
  name: 'NewPass',
  props: {
    username: {
      type: String,
      default: '',
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
    doPasswordsMatch: true,
    isChangeSuccessfull: false,
    hasError: false,
    errorMsg: '',
    form: {
      code: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Code',
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
      changePassword: 'auth/forgotPasswordSubmit',
    }),
    validateField,
    validateForm,
    clearError,
    transformForm,
    submitChange() {
      const isValid = this.validateForm(this.form);
      if (!isValid) return;

      this.doPasswordsMatch = this.form.password.value === this.form.passwordConfirmed.value;
      if (!this.doPasswordsMatch) return;

      const form = {
        ...this.transformForm(this.form),
        username: this.username,
      };

      this.clearErrors();
      this.changePassword(form).then(() => {
        this.isChangeSuccessfull = true;
      }).catch((err) => {
        this.hasError = true;
        this.errorMsg = err.message || '';
      });
    },
    clearErrors() {
      if (this.hasError) this.hasError = true;
      if (this.this.errorMsg) this.errorMsg = err.message || '';
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.new-pass {
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
}
</style>
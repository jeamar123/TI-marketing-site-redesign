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
        <ul>
          <li>
            <a href="#" aria-label="Log in with Google">
              <svg-icon
                name="google"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Log in with Facebook">
              <svg-icon
                name="facebook-bg"
                width="24"
                height="24"
                fill="currentColor"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Log in with Twitter">
              <svg-icon
                name="twitter"
                width="24"
                height="20"
                fill="currentColor"
              />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Log in with Linkedin">
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
          
        </form>
      </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';

export default {
  name: 'Login',
  props: {
    GenericSection,
    FormLayout,
    Heading,
    Input,
  },
  components: {},
  data: () => ({
    form: {
      email: {
        value: '',
        error: '',
      },
    },
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
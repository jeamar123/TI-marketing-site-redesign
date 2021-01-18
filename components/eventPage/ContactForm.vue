<template>
  <GenericSection class="contacts-form">
    <Heading
      color="white"
      text-align="center"
      class="contacts-form__heading"
    >
      Contact us
    </Heading>
    <form class="contacts-form__form" @submit.prevent="contactUs">
      <Input
        v-model="form.name"
        name="name"
        label="Name"
        class="contacts-form__input"
      />
      <Input
        v-model="form.email"
        name="email"
        label="Email"
        class="contacts-form__input"
      />
      <Input
        v-model="form.message"
        name="message"
        label="Message"
        is-multiline
        :rows="4"
        class="contacts-form__input"
      />
      <Button class="contacts-form__button">
        submit
      </Button>
    </form>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'ContactsForm',
  props: {},
  components: {
    GenericSection,
    Heading,
    Input,
    Button,
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      message: '',
    },
  }),
  computed: {},
  methods: {
    contactUs() {
      console.log(contact);
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
    display: flex;
    justify-content: space-between;

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
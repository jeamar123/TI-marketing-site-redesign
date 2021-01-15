<template>
  <GenericSection class="volunteering">
    <Heading color="white" class="volunteering__heading">
      Interested in
      <br />
      volunteering?
    </Heading>
    <form @submit.prevent="applyVolunteering" class="volunteering__form">
      <Input
        v-model.trim="email"
        name="volunteering-email"
        label="Email"
      />
      <Button class="volunteering__submit">
        submit
      </Button>
    </form>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Button from '~/components/common/Button';
import Input from '~/components/common/Input';

export default {
  name: 'Volunteering',
  props: {},
  components: {
    GenericSection,
    Heading,
    Button,
    Input,
  },
  data: () => ({
    email: '',
  }),
  computed: {},
  methods: {
    applyVolunteering() {
      console.log('apply');
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
      margin: 0;
    }

    &__heading {
      text-align: center !important;
      margin-bottom: 64px;
    }
  }

  @media (min-width: $media-md) {
    padding: 268px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

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
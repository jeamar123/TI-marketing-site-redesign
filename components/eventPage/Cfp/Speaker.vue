<template>
  <FormLayout class="cfp-speaker">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Let's introduce yourself
      </Heading>
      <p class="form-layout__text">
        If you have already participated in our conferences, you can
        <a
          :href="`${baseUrl}/manager/#/speaker`"
          target="_blank"
          class="form-layout__link"
        >apply</a> through the cabinet
      </p>
    </template>
    <template #form>
      <form @submit.prevent="goToTalk">
        <Input
          v-model="fields.firstName"
          name="first-name"
          label="First Name"
        />
        <Input
          v-model="fields.lastName"
          name="last-name"
          label="Last Name"
        />
        <div class="cfp-speaker__inputs-wrapper">
          <Input
            v-model="fields.organization"
            name="organization"
            label="Organization"
          />
          <Input
            v-model="fields.position"
            name="position"
            label="Position"
          />
        </div>
        <Input
          v-model="fields.bio"
          name="bio"
          label="Bio"
          is-multiline
          :rows="4"
        />
        <Button class="form-layout__button">
          next
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { mapState } from 'vuex';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'CfpSpeaker',
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'baseUrl',
    ])
  },
  methods: {
    goToTalk() {},
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.cfp-speaker {
  @media (min-width: $media-md) {
    &__inputs-wrapper {
      display: grid;
      grid-gap: 32px;
      grid-template-columns: repeat(2, 1fr);

      input {
        width: 100%;
      }
    }
  }
}
</style>
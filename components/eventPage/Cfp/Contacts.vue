<template>
  <FormLayout>
    <template #info>
      <Heading color="white" class="form-layout__heading">
        How can we contact you?
      </Heading>
      <p class="form-layout__text">
        After registration, you will get access to the speaker panel and will be able to submit applications in two clicks
      </p>
    </template>
    <template #form>
      <form @submit.prevent="sendCfp">
        <Input
          v-model="fields.email"
          name="email"
          label="Email"
        />
        <Input
          v-model="fields.phone"
          name="phone"
          label="Phone"
        />
        <Button class="form-layout__button">
          send
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
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
  computed: {},
  methods: {
    sendCfp() {},
  },
};
</script>

<template>
  <GenericSection class="volunteering">
    <Heading color="white" class="volunteering__heading">
      Volunteering
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
</style>
<template>
  <TextSection
    :heading="title"
    :text="text"
    align-heading="right"
    is-event-page
    is-reverse
    class="apply"
  >
    <Button
      color="black"
      class="apply__button"
      @click="$router.push(`/${$route.params.event}/cfp`)"
    >
      apply
    </Button>
  </TextSection>
</template>

<script>
import config from '~/static/config';
import TextSection from '~/components/common/TextSection';
import Button from '~/components/common/Button';

export default {
  name: 'EventPageApply',
  props: {},
  components: {
    TextSection,
    Button,
  },
  data: () => ({
    title: 'Want to share your experience?',
    text: `If you’re an expert in your IT field, ${config.currentEvent === 'exploit' ? 'ExploitCon' : 'ArcticCon'}
      is a great platform to get your message out. Show off your research,
      an attack or even a solution you implemented that others should see.
      Well, you are in luck! Call For Papers is now open. Click below to apply!`
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.apply {
  &__button {
    width: 100%;
    margin-top: 24px;
  }

  @media (min-width: $media-sm) and (max-width: $media-md - 1px) {
    padding-top: 0;
  }

  @media (min-width: $media-md) {
    &__button {
      width: 80%;
    }
  }
}
</style>
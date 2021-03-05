<template>
  <TextSection
    :heading="heading"
    :text="description"
    is-event-page
    class="event-about"
  />
</template>

<script>
import TextSection from '~/components/common/TextSection';

export default {
  name: 'EventPageAbout',
  props: {
    name: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
  components: {
    TextSection,
  },
  data: () => ({}),
  computed: {
    heading() {
      return `What is ${this.name}?`;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
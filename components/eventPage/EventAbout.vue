<template>
  <TextSection
    :heading="data.title"
    :text="data.description"
    is-event-page
    class="event-about"
  />
</template>

<script>
import TextSection from '~/components/common/TextSection';

export default {
  name: 'EventPageAbout',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    TextSection,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
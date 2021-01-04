<template>
  <TextSection
    :heading="data.title"
    :text="data.description"
    class="about"
  />
</template>

<script>
import jsonData from '~/static/data.json';
import Heading from '~/components/common/Heading';
import TextSection from '~/components/common/TextSection';

export default {
  name: 'HomePAgeAbout',
  props: {},
  components: {
    Heading,
    TextSection,
  },
  data: () => ({
    data: jsonData.home.about,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
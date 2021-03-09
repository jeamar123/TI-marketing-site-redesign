<template>
  <div>
    <Header
      :heading="heading"
      :heading-follower="headingFollower"
    />
    <main>
      policy text
    </main>
  </div>
</template>

<script>
import Header from './PolicyHeader';

export default {
  name: 'Policy',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    heading: {
      type: String,
      default: '',
    },
    headingFollower: {
      type: String,
      default: '',
    },
  },
  components: {
    Header,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
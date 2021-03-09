<template>
  <div>
    <PolicyHeader
      :heading="heading"
      :heading-follower="headingFollower"
    />
    <PolicyText :data="data" />
  </div>
</template>

<script>
import PolicyHeader from './PolicyHeader';
import PolicyText from './PolicyText';

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
    PolicyHeader,
    PolicyText,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
<template>
  <PolicyPage
    :data="data"
    heading="Cookie Policy"
  />
</template>

<script>
import data from '~/static/policies/cookie-policy';
import PolicyPage from '~/components/policies/PolicyPage';

export default {
  name: 'CookiePolicyPage',
  props: {},
  components: {
    PolicyPage,
  },
  data: () => ({
    data,
  }),
  computed: {},
  methods: {},
};
</script>

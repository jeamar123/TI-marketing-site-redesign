<template>
  <PolicyPage
    :data="data"
    heading="Exploit Terms of Service"
  />
</template>

<script>
import data from '~/static/policies/terms-of-service';
import PolicyPage from '~/components/policies/PolicyPage';

export default {
  name: 'TermsOfServicePage',
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

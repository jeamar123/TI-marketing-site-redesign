<template>
  <PolicyPage
    :data="data"
    heading="Privacy Policy"
    :heading-follower="`Your privacy is important to us. It is Exploit's policy to respect your privacy
      regarding any information we may collect from you across our website, https://exploitcon.com,
      and other sites we own and operate.`"
  />
</template>

<script>
import data from '~/static/policies/privacy-policy';
import PolicyPage from '~/components/policies/PolicyPage';

export default {
  name: 'PrivacyPolicyPage',
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

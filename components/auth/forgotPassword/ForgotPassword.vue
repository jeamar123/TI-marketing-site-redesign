<template>
  <GenericSection class="forgot-pass">
    <SendCode v-if="!isCodeSent" />
    <NewPassword v-else />
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import SendCode from './SendCode';
import NewPassword from './NewPassword';

export default {
  name: 'ForgotPassword',
  props: {},
  components: {
    GenericSection,
    SendCode,
    NewPassword,
  },
  data: () => ({
    isCodeSent: false,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.forgot-pass {
  padding-top: 76px;
  padding-bottom: 32px;
  min-height: 100vh;

  @media (min-width: $media-sm) {
    display: flex;
    align-items: center;
  }
}
</style>
<template>
  <GenericSection class="cfp">
    <Speaker />
    <Talk />
    <Contacts />
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Speaker from './Speaker';
import Talk from './Talk';
import Contacts from './Contacts';

export default {
  name: 'CfpForm',
  props: {},
  components: {
    GenericSection,
    Speaker,
    Talk,
    Contacts,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.cfp {
  padding-top: 78px;
  padding-bottom: 24px;

  @media (min-width: $media-sm) {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 222px;
    padding-bottom: 142px;
  }

  @media (min-width: $media-md) {
    padding-top: 140px;
    padding-bottom: 60px;
  }

  @media (min-width: $media-lg) {
    padding-top: 204px;
    padding-bottom: 124px;
  }
}
</style>
<template>
  <GenericSection bg-color="while" class="sponsors">
    <SponsorsList
      v-for="([key, value]) in dataArr"
      :key="key"
      :type="key"
      :list="value"
      class="sponsors__list"
    />
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import SponsorsList from './SponsorsList';

export default {
  name: 'SponsorsSection',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    GenericSection,
    SponsorsList,
  },
  data: () => ({}),
  computed: {
    dataArr() {
      return Object.entries(this.data);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.sponsors {
  padding-bottom: 34px;

  &__list {
    margin-bottom: 34px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-sm) {
    padding-bottom: 96px;

    &__list {
      margin-bottom: 70px;
    }
  }

  @media (min-width: $media-md) {
    padding-bottom: 100px;
    
    &__list {
      margin-bottom: 100px;
    }
  }
}
</style>
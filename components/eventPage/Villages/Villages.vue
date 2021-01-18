<template>
  <GenericSection bg-color="white" class="villages">
    <Heading text-align="center" class="villages__heading">
      Villages
    </Heading>
    <client-only>
      <Carousel
        autoplay
        autoplay-hover-pause
        loop
        navigation-enabled
        :pagination-enabled="false"
        :autoplay-timeout="2000"
        :per-page-custom="[
          [320, 1],
          [720, 3],
        ]"
        navigation-next-label="&#8594;"
        navigation-prev-label="&#8592;"
        class="villages__carousel"
      >
        <Slide
          v-for="(village, index) in data"
          :key="index"
          class="village__slide"
        >
          <Card
            :village="village"
            class="villages__slide-card"
          />
        </Slide>
      </Carousel>
    </client-only>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Card from './VillageCard';

export default {
  name: 'Villages',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenericSection,
    Heading,
    Card,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.villages {
  $self: &;
  padding-bottom: 42px;

  &__heading {
    margin-bottom: 52px;
  }

  .VueCarousel-slide-center {
    #{$self}__slide-card {
      background-color: $accent-red;
      border-color: $accent-red;
    }
  }

  .VueCarousel-navigation-button {
    top: unset;
    padding: 0 !important;
    margin: 0 !important;
    transform: none !important;
    font-size: 22px;
  }

  @media (min-width: $media-xs) {
    &__heading {
      margin-bottom: 22px;
    }
  }

  @media (min-width: $media-sm) {
    padding-bottom: 112px;

    &__heading {
      margin-bottom: 48px;
    }

    &__slide-card {
      margin-right: 10px;
    }
  }
}
</style>
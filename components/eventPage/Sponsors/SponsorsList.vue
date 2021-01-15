<template>
  <div class="sponsors-list">
    <Heading class="sponsors-list__heading">
      {{ type }}
      <br />
      sponsors
    </Heading>
    <div class="sponsors-list__list">
      <Card
        v-for="sponsor in list"
        :key="sponsor"
        :sponsor="sponsor"
        class="sponsors-list__card"
      />
    </div>
  </div>
</template>

<script>
import Heading from '~/components/common/Heading';
import Card from './SponsorCard';

export default {
  name: 'SponsorsList',
  props: {
    type: {
      type: String,
      default: '',
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  components: {
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

.sponsors-list {
  $self: &;
  $card-size: 144px;

  &__heading {
    text-transform: capitalize;
  }

  &__list {
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(2, $card-size);
    margin-top: calc(#{$card-size} / 2 + 12px);
  }

  &__card {
    &:nth-child(odd) {
      margin-top: -50%;
    }
  }

  @media (min-width: $media-xs) {
    $card-size: 152px;
    width: $card-size * 3;
    margin: 0 auto;

    &__list {
      grid-template-columns: repeat(3, $card-size);
      margin-top: 12px;
      grid-auto-flow: dense;
    }

    &:nth-child(odd) {
      #{$self}__heading {
        text-align: right !important;
      }

      #{$self}__card {
        &:nth-child(3n + 1) {
          margin-top: -50%;
        }
      }
    }

    &:nth-child(even) {
      #{$self}__heading {
        text-align: left !important;
      }

      #{$self}__card {
        &:nth-child(3) {
          margin-top: -50%;
        }

        &:nth-child(3n + 4) {
          margin-top: -50%;
          grid-column: 3;
        }
      }
    }

    &__card {
      &:nth-child(odd) {
        margin-top: 0;
      }
    }
  }

  @media (min-width: $media-sm) {
    $card-size: 224px;
    width: $card-size * 3;

    &__list {
      grid-template-columns: repeat(3, $card-size);
    }
  }

  @media (min-width: $media-md) {
    $card-size: 306px;
    width: $card-size * 3;

    &__list {
      grid-template-columns: repeat(3, $card-size);
      margin-top: 0;
    }

    &:nth-child(odd) {
      #{$self}__card {
        &:nth-child(3n + 1) {
          margin-top: 0;
        }

        &:nth-child(1) {
          grid-column: 2 !important;
        }

        &:nth-child(3n) {
          margin-top: -50%;
          grid-column: 2;
        }

        &:nth-child(3n + 2) {
          grid-column: 1;
        }

        &:nth-child(3n + 1) {
          grid-column: 3;
          margin-top: -50%;
        }

        &:nth-child(4) {
          grid-row: 2;
        }

        &:nth-child(7) {
          grid-row: 3;
        }

        &:nth-child(10) {
          grid-row: 4;
        }

        &:nth-child(13) {
          grid-row: 5;
        }

        &:nth-child(16) {
          grid-row: 6;
        }

        &:nth-child(19) {
          grid-row: 7;
        }
      }
    }

    &:nth-child(even) {
      #{$self}__heading {
        position: relative;
        margin-top: -($card-size / 2);
        top: $card-size / 2;
      }

      #{$self}__card {
        &:nth-child(3) {
          margin-top: 0;
        }

        &:nth-child(3n + 4) {
          margin-top: 0;
          grid-column: initial;
        }

        &:nth-child(1) {
          grid-column: 2 !important;
          margin-top: 0 !important;
        }

        &:nth-child(3n) {
          grid-column: 2;
        }

        &:nth-child(3n + 1) {
          grid-column: 3;
          margin-top: -50%;
        }

        &:nth-child(4) {
          grid-row: 2;
        }

        &:nth-child(3n + 2) {
          grid-column: 1;
          grid-row: 2;
        }

        &:nth-child(5),
        &:nth-child(7) {
          grid-row: 3;
        }

        &:nth-child(8),
        &:nth-child(10) {
          grid-row: 4;
        }

        &:nth-child(11),
        &:nth-child(13) {
          grid-row: 5;
        }

        &:nth-child(14),
        &:nth-child(16) {
          grid-row: 6;
        }

        &:nth-child(17),
        &:nth-child(19) {
          grid-row: 7;
        }

        &:nth-child(20),
        &:nth-child(22) {
          grid-row: 8;
        }
      }
    }

    &__card {
      &:nth-child(odd) {
        margin-top: 0;
      }
    }
  }
}
</style>
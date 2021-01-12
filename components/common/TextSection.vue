<template>
  <section
    class="text-section"
    :class="{
      'text-section--reverse': isReverse,
      'text-section--event': isEventPage,
    }"
  >
    <Heading
      :text-align="alignHeading"
      class="text-section__heading"
    >
      {{ heading }}
    </Heading>
    <div class="text-section__wrapper">
      <p class="text-section__text">
        {{ text }}
      </p>
      <slot />
    </div>
  </section>
</template>

<script>
import Heading from './Heading';

export default {
  name: 'TextSection',
  props: {
    heading: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    alignHeading: {
      type: String,
      default: 'left',
    },
    isReverse: {
      type: Boolean,
      default: false,
    },
    isEventPage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.text-section {
  $self: &;
  padding: 38px 16px;

  &__heading {
    margin-bottom: 16px;
  }

  &__text {
    text-align: justify;
  }

  &__heading,
  &__text {
    flex-shrink: 0;
    flex-grow: 0;
    flex-basis: 50%;
  }

  @media (min-width: $media-xs) {
    &__text {
      text-align: left;
    }
  } 

  @media (min-width: $media-sm) {
    padding: 202px 24px;
    display: flex;

    &--reverse {
      #{$self}__wrapper {
        order: 1
      }

      #{$self}__heading {
        order: 2;
      }
    }

    &--event {
      padding: 100px 24px;
    }

    &__heading {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-md) {
    padding: 184px 24px;

    &--event {
      padding: 230px 24px;
    }

    &--reverse {
      #{$self}__heading {
        margin-left: 10%;
        margin-right: 0;
      }
    }

    &__heading {
      flex-basis: 30%;
      margin-right: 10%;
    }

    &__text {
      flex-basis: 60%;
    }
  }

  @media (min-width: $media-lg) {
    padding: 238px 20%;

    &--event {
      padding: 270px 20%;
    }
  }
}
</style>
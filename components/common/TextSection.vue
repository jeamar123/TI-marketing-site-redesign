<template>
  <section class="text-section">
    <Heading class="text-section__heading">
      {{ heading }}
    </Heading>
    <p class="text-section__text">
      {{ text }}
    </p>
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

    &__heading {
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-md) {
    padding: 184px 24px;

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
  }
}
</style>
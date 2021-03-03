<template>
  <div class="success">
    <Heading color="white">
      Thank you!
    </Heading>
    <p class="success__text">
      <slot />
    </p>
  </div>
</template>

<script>
import Heading from './Heading';

export default {
  name: 'Success',
  props: {},
  components: {
    GenericSection,
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.success {
  &__text {
    text-align: center;
  }

  @media (min-width: $media-sm) {
    &__text {
      text-align: left;
    }
  }
}
</style>
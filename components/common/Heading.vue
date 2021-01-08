<template>
  <component
    :is="type"
    :style="{
      'text-align': textAlign,
      'color': color === 'black' ? '#0B0A14' : '#fff'
    }"
    :class="`heading--${type}`"
    class="heading">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      default: 'h2',
    },
    textAlign: {
      type: String,
      default: 'left',
    },
    color: {
      type: String,
      default: 'black',
    },
  },
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.heading {
  $self: &;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: $black;

  &--h3 {
    font-size: 24px;
    line-height: 33px;
  }

  &--h4 {
    font-size: 18px;
    line-height: 25px;
  }

  @media (min-width: $media-sm) {
    font-size: 56px;
    line-height: 76px;

    &--h3 {
      font-size: 32px;
      line-height: 44px;
    }

    &--h4 {
      font-size: 24px;
      line-height: 33px;
    }
  }

  @media (max-width: $media-sm - 1px) {
    &:not(#{$self}--h3):not(#{$self}--h4) {
      text-align: center!important;
    }
  }
}
</style>
<template>
  <button
    class="button"
    :class="[`button--${color}`,
    {'button--smaller': isSmaller}]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: 'white', // could be also 'black'
    },
    isSmaller: {
      type: Boolean,
      default: false,
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

.button {
  display: block;
  border: none;
  background: none;
  padding: 0;
  font-weight: bold;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 24px;
  padding: 16px 0;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s, opacity 0.3s;

  &:hover {
    color: $accent-red;
    border-color: $accent-red;
  }

  &:active {
    opacity: 0.6;
  }

  &--white {
    color: $white;
    border: 2px solid $white;
  }

  &--black {
    color: $black;
    border: 2px solid $black;
  }

  &--smaller {
    font-size: 16px;
    line-height: 24px;
    padding: 12px 0;
  }
}
</style>
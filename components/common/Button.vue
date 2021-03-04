<template>
  <button
    class="button"
    :class="[`button--${color}`,
    {'button--smaller': isSmaller}]"
    @click="$emit('click', $event)"
  >
    <transition-group name="fade" mode="out-in">
      <span
        v-if="isLoading"
        key="btn-loading"
        class="button__loading"
      >
        <span />
        <span />
      </span>
      <span v-else key="btn-content">
        <slot />
      </span>
    </transition-group>
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
    isLoading: {
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
  position: relative;
  min-height: 56px;
  cursor: pointer;
  transition: color 0.3s, border-color 0.3s, opacity 0.3s;

  &:hover {
    color: $accent-red;
    border-color: $accent-red;
  }

  &:active {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
  }

  &__loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 32px;
    height: 32px;
    border-radius: 100%;
    
    span {
      position: absolute;
      top: 0;
      left: 0;
      background: rgba($accent-red, 0.7);
      width: 32px;
      height: 32px;
      border-radius: 100%;
      opacity: 0;
    }
    
    span:first-child {
      transform: scale(1);
      animation: pulse 2s infinite linear;
    }
    
    span:last-child {
      animation: pulse 2s 1s infinite linear;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(0.1);
      opacity: 0;
    }
    33% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(1.5);
      opacity: 0;
    }
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
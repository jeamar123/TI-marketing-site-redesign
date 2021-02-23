<template>
  <div class="user-menu" :class="{'user-menu--menu-shown': isMenuShown}">
    <button class="user-menu__button" @click="isMenuShown = !isMenuShown">
      david
    </button>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',
  props: {
    userName: {
      type: String,
      default: '',
    },
  },
  components: {},
  data: () => ({
    isMenuShown: false,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
.user-menu {
  $self: &;
  width: 100%;
  display: flex;
  justify-content: center;

  &--menu-shown {
    #{$self}__button {
      &::before {
        transform: rotate(135deg);
      }

      &::after {
        transform: rotate(-135deg);
      }
    }
  }

  &__button {
    background: transparent;
    border: none;
    padding: 0;
    padding-right: 32px;
    position: relative;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: $white;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: color 0.3s, opacity 0.3s;

    &:hover {
      color: $accent-red;

      &::before,
      &::after {
        background-color: $accent-red;
      }
    }

    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 2px;
      height: 9px;
      background-color: $white;
      transition: background-color 0.3s, transform 0.3s;
    }

    &::before {
      transform: rotate(45deg);
      right: 3px;
    }

    &::after {
      transform: rotate(-45deg);
      right: 9px;
    }
  }
}
</style>
<template>
  <nav class="navigation">
    <router-link to="/" class="navigation__link">
      <img
        src="~/assets/img/logo.png"
        alt="ExploitCon logo"
        class="navigation__logo"
      />
    </router-link>
    <div class="navigation__wrapper">
      <button
        class="navigation__toggler"
        :class="{'active': isMobNavOpened}"
        @click="isMobNavOpened = !isMobNavOpened"
      >
        <span /> <!-- for burger menu -->
      </button>
      <div v-show="isMobNavOpened" class="navigation__items">
        
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  props: {},
  components: {},
  data: () => ({
    isMobNavOpened: false,
  }),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.navigation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__link {
    line-height: 0;
  }

  &__logo {
    height: 24px;
  }

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__toggler {
    border: none;
    background: none;
    padding: 0;
    width: 20px;
    height: 20px;
    position: relative;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::before,
    &::after {
      content: '',
    }

    &::before,
    &::after,
    span {
      position: absolute;
      left: 0;
      height: 2px;
      width: 20px;
      border-radius: 1px;
      background-color: $white;
      transition: 0.3s ease-in-out;
    }

    &::before {
      top: 3px;
    }

    span {
      top: 9px;
    }

    &::after {
      top: 15px;
    }

    &.active {
      &::before {
        transform: rotate(45deg);
        top: 9px;
        left: 0;
      }

      span {
        width: 0%;
        opacity: 0;
      }

      &::after {
        transform: rotate(-45deg);
        top: 9px;
        left: 0;
      }
    }
  }
}
</style>
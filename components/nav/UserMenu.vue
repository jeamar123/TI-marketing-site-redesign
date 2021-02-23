<template>
  <div class="user-menu" :class="{'user-menu--menu-shown': isMenuShown}">
    <button class="user-menu__button" @click="isMenuShown = !isMenuShown">
      {{ userName }}
    </button>
    <transition name="fade">
      <nav v-show="isMenuShown" class="user-menu__nav">
        <!-- <router-link to="/">
          Edit profile
        </router-link> -->
        <button class="user-menu__logout" @click="logOut">
          Log out
        </button>
      </nav>
    </transition>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  methods: {
    ...mapActions({
      logOut: 'auth/signOut',
    }),
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
.user-menu {
  $self: &;
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

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

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: color 0.3s, opacity 0.3s;

    &:focus {
      outline: none;
    }
  }

  &__button {
    padding-right: 32px !important;
    position: relative;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: $white;
    font-size: 16px;
    line-height: 24px;
    font-weight: bold;

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

  &__nav {
    padding: 16px 24px;
  }

  &__logout {
    color: $purple-gray;

    &:hover {
      color: mix($purple-gray, $accent-red);
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (min-width: $media-sm) {
    position: relative;
    align-items: flex-start;

    &__nav {
      position: absolute;
      top: 100%;
      padding-left: 0;
    }
  }
}
</style>
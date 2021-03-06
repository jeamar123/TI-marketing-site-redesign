<template>
  <div class="navigation" :class="{'navigation--with-bg': isMobNavOpened}">
    <router-link to="/" class="navigation__link">
      <img
        :src="logoPath"
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
      <transition name="fade">
      <div v-show="isMobNavOpened" class="navigation__items">
        <div class="navigation__nav-wrapper">
          <nav class="navigation__navigation">
            <router-link
              v-for="link in menuItems"
              :key="link.hash"
              :to="`${path}#${link.hash}`"
              class="navigation__nav-link"
            >
              {{ link.name }}
            </router-link>
          </nav>
          <div class="navigation__login-wrapper-sm">
            <Button
              v-if="!userName"
              is-smaller
              class="navigation__login-sm"
              @click="$router.push('/login')"
            >
              login
            </Button>
            <UserMenu v-else :user-name="userName" />
          </div>
        </div>
      </div>
      </transition>
    </div>
    <div class="navigation__login-wrapper">
      <div class="navigation__contacts">
        <a href="tel:0972907660" class="navigation__phone">
          (097)&nbsp;290&nbsp;-&nbsp;7660
        </a>
        <a :href="`mailto:${config.currentEmail}`" class="navigation__email">
          {{ config.currentEmail }}
        </a>
      </div>
      <Button
        v-if="!userName"
        is-smaller
        class="navigation__login-lg"
        @click="$router.push('/login')"
      >
        login
      </Button>
      <UserMenu v-else :user-name="displayUserName" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '~/static/config';
import Button from '~/components/common/Button';
import UserMenu from '~/components/nav/UserMenu';

export default {
  name: 'Navigation',
  props: {},
  components: {
    Button,
    UserMenu,
  },
  data: () => ({
    config,
    isMobNavOpened: false,
    homeNav: [
      'Home',
      'About',
      'Events',
      'Blog',
      'Contacts',
    ],
    eventNav: [
      'About',
      'Apply talk',
      'Schedule',
      'Villages',
      'Volunteering',
      'Sponsors',
      'Tickets',
    ],
  }),
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName',
      user: 'getUser',
    }),
    displayUserName() {
      return this.user.first_name
        || this.user.display_name
        || this.userName;
    },
    menuItems() {
      return this.$route.params.event
        ? this.getMenuItems(this.eventNav)
        : this.getMenuItems(this.homeNav);
    },
    path() {
      return this.$route.params.event
        ? `/${this.$route.params.event}`
        : '/';
    },
    logoPath() {
      return require(`~/assets/img/${this.config.currentEvent === 'exploit' ? '' : 'ac-white-'}logo.png`);
    },
  },
  methods: {
    getMenuItems(itemsArr) {
      return itemsArr.map(item => ({
        name: item,
        hash: item.includes(' ')
          ? item.toLowerCase().split(' ').join('-')
          : item.toLowerCase(),
      }));
    },
  },
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
  transition: background-color 0.3s;

  &--with-bg {
    background-color: $black;
  }

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

  &__nav-wrapper {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    height: calc(100vh - 56px);
    background-color: $black;
    color: $white;
    padding: 20px 16px;
    display: flex;
    flex-flow: column;
  }

  &__navigation {
    margin-top: 30%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  &__nav-link {
    font-size: 16px;
    line-height: 42px;
    transition: color 0.3s, opacity 0.3s;

    &:hover {
      color: $accent-red;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__login-wrapper {
    display: none;
  }

  &__login-sm {
    margin-top: auto;
  }

  @media (min-width: $media-xs) {
    &__nav-wrapper {
      height: unset;
    }

    &__navigation {
      margin-top: 0;
      margin-bottom: 24px;
    }

    &__login-sm {
      width: 216px;
      align-self: center;
    }
  }

  @media (min-width: $media-sm) {
    justify-content: flex-start;
    padding: 16px 24px;

    &__link {
      order: 2;
    }

    &__wrapper {
      order: 1;
      margin-right: 24px;
    }

    &__login-wrapper {
      order: 3;
      margin-left: auto;
      display: flex;
      align-items: center;
    }

    &__nav-wrapper {
      height: calc(100vh - 88px);
      padding: 0 24px;
    }

    &__login-wrapper-sm {
      display: none;
    }

    &__login-lg {
      width: 172px;
    }

    &__contacts {
      display: flex;
      flex-flow: column;
      color: $white;
      margin-right: 24px;
      font-size: 16px;
      line-height: 24px;
    }

    &__phone {
      font-weight: bold;
      margin-bottom: 8px;
    }

    &__email {
      width: max-content;
    }

    &__navigation {
      margin-top: 15%;
      align-items: flex-start;
    }

    &__nav-link {
      line-height: 52px;
    }
  }

  @media (min-width: $media-lg) {
    padding: 16px 20%;

    &--with-bg {
      background-color: transparent !important;
    }

    &__nav-wrapper {
      height: unset;
      padding: 0 20%;
      background-color: transparent;
    }

    &__navigation {
      margin: 0;
      flex-direction: row;
    }

    &__nav-link {
      font-size: 18px;
      margin-right: 32px;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>

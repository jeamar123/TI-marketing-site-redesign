<template>
  <footer class="footer">
    <div class="footer__wrapper">
      <div class="footer__logo-wrapper">
        <img :src="logoPath" alt="ExploitCon logo" class="footer__logo" />
      </div>
      <p class="footer__description">
        Interactive&nbsp;IT
        <br />
        Security&nbsp;Conference
      </p>
      <div class="footer__nav-wrapper">
        <p class="footer__text">
          Say hello!
        </p>
        <nav class="footer__social">
          <a
            href="#"
            class="footer__social-link"
            aria-label="Link to Twitter"
          >
            <svg-icon
              name="twitter"
              width="30"
              height="24"
              fill="#fff"
              class="icon icon--twitter"
            />
          </a>
          <a
            href="#"
            class="footer__social-link"
            aria-label="Link to Facebook"
          >
            <svg-icon
              name="facebook"
              width="14"
              height="24"
              fill="#fff"
              class="icon icon--facebook"
            />
          </a>
          <a
            href="#"
            class="footer__social-link"
            aria-label="Link to LinkedIn"
          >
            <svg-icon
              name="linkedin"
              width="30"
              height="24"
              fill="#fff"
              class="icon icon--linkedin"
            />
          </a>
        </nav>
      </div>
      <p class="footer__copyright footer__copyright--lg">
        Copyright ©2020 All rights reserved
      </p>
    </div>
    <div class="footer__wrapper footer__wrapper--contacts" id="contacts">
      <Heading color="white" class="footer__heading">
        Contact us
      </Heading>
      <p class="footer__contacts">
        <a href="tel:9072907660">
          (907)&nbsp;290&nbsp;-&nbsp;7660
        </a>
        <a :href="`mailto:${config.currentEmail}`">
          {{ config.currentEmail }}
        </a>
      </p>
      <p class="footer__policies">
        <a href="#" class="footer__policy">
          Privacy Policy
        </a>
        <a href="#" class="footer__policy">
          Terms of Service
        </a>
        <a href="#" class="footer__policy">
          Cookie Policy
        </a>
      </p>
    </div>
    <p class="footer__copyright footer__copyright--sm">
      Copyright ©2020 All rights reserved
    </p>
  </footer>
</template>

<script>
import config from '~/static/config';
import Heading from '~/components/common/Heading';

export default {
  name: 'MainPageFooter',
  props: {},
  components: {
    Heading,
  },
  data: () => ({
    config,
  }),
  computed: {
    logoPath() {
      return require(`~/assets/img/${this.config.currentEvent === 'exploit' ? '' : 'ac-white-'}logo.png`);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.footer {
  background-color: $black;
  padding-top: 80px;
  position: relative;
  z-index: 3;

  &__wrapper {
    padding-left: 16px;
    padding-right: 16px;
    padding-bottom: 48px;
    text-align: center;
    color: $white;
    font-size: 16px;
    line-height: 22px;

    &--contacts {
      padding-top: 38px;
      padding-bottom: 38px;
      background-color: $accent-blue;
    }
  }

  &__logo {
    height: 32px;
    margin-bottom: 4px;
  }

  &__description {
    margin-bottom: 22px;

    br {
      display: none;
    }
  }

  &__text {
    margin-bottom: 10px;
  }

  &__social {
    display: flex;
    justify-content: center;
  }

  &__social-link {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s;

    .icon {
      transition: fill 0.3s;
    }

    &:hover .icon {
      fill: $accent-blue;
    }

    &:active {
      opacity: 0.6;
    }
  }

  &__copyright {
    color: $purple-gray;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    padding: 12px 0;

    &--lg {
      display: none;
    }
  }

  &__heading {
    margin-bottom: 20px;
  }

  &__contacts,
  &__policies {
    display: flex;
    flex-flow: column;
  }

  &__contacts {
    line-height: 26px;
    margin-bottom: 24px;

    a:hover {
      text-decoration: underline;
    }
  }

  &__policies {
    line-height: 32px;
  }

  &__policy {
    transition: text-decoration 0.3s, opacity 0.3s;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (min-width: $media-xs) {
    &__logo {
      height: 48px;
      margin-bottom: 12px;
    }

    &__wrapper--contacts {
      display: flex;
      flex-wrap: wrap;
    }

    &__heading {
      flex-basis: 100%;
    }

    &__contacts,
    &__policies {
      flex-basis: 50%;
    }

    &__contacts {
      text-align: left;
    }

    &__policies {
      text-align: right;
    }
  }

  @media (min-width: $media-sm) {
    &__wrapper {
      padding-left: 24px;
      padding-right: 24px;
      display: flex;
      flex-wrap: wrap;
      font-size: 24px;
    }

    &__logo-wrapper {
      flex-basis: 100%;
    }

    &__description {
      flex-basis: 50%;
      flex-grow: 1;
      text-align: left;
      line-height: 44px;
      
      br {
        display: block;
      }
    }

    &__logo {
      margin-bottom: 40px;
    }

    &__text {
      text-align: left;
      line-height: 42px;
      margin-bottom: 10px;
    }

    &__social-link {
      margin-right: 40px;
      width: 42px;
      height: 42px;

      &:last-child {
        margin-right: 0;
      }
    }

    .icon {
      &--twitter {
        width: 42px;
        height: 34px;
      }

      &--facebook {
        width: 20px;
        height: 34px;
      }

      &--linkedin {
        width: 42px;
        height: 34px;
      }
    }

    &__heading {
      text-align: center !important;
      margin-bottom: 60px;
    }

    &__contacts {
      line-height: 42px;
    }

    &__policies {
      font-size: 18px;
      line-height: 36px;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 0;
    display: flex;

    &__wrapper {
      flex: 50% 0 0;
      padding: 24px;
      padding-top: 104px;
      flex-flow: column;
      flex-wrap: nowrap;
    }

    &__logo-wrapper {
      text-align: left;
    }

    &__logo {
      height: 64px;
    }

    &__description {
      margin-bottom: 164px;
    }

    &__social {
      justify-content: flex-start;
      margin-bottom: 90px;
    }

    &__copyright {
      text-align: left;
      padding: 0;

      &--lg {
        display: block;
      }

      &--sm {
        display: none;
      }
    }

    &__heading {
      text-align: right !important;
      flex-basis: unset;
      margin-bottom: 100px;
    }

    &__contacts {
      text-align: right;
      flex-grow: 1;
    }

    &__policies {
      flex-basis: unset;
    }
  }

  @media (min-width: $media-lg) {
    &__wrapper {
      flex-grow: 0;

      &:first-child {
        padding-left: 20%;
      }

      &:nth-child(2) {
        padding-right: 20%;
      }
    }

    &__description {
      margin-bottom: 244px;
    }
  }

  @media (min-width: $media-xl) {
    &__wrapper--contacts {
      padding-left: 3%;
    }

    &__policies {
      flex-flow: row;
      justify-content: space-between;
    }
  }
}
</style>

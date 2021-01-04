<template>
  <div class="hero">
    <div class="hero__wrapper">
      <h1 class="hero__heading">Exploit</h1>
    </div>
    <div class="hero__description">
      Interactive IT Security Conference
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePageHero',
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.hero {
  overflow: hidden;
  position: relative;
  height: 100vh;

  &__wrapper {
    width: 100%;
    height: 100vh;
    background-image: url('../../assets/img/bg/main-page-bg.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
  }

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
  }

  &::before {
    background-image: linear-gradient(89.82deg, rgba(20, 109, 242, 0.3) 0.15%, rgba(255, 0, 84, 0.3) 99.84%);
  }

  &::after {
    background-color: rgba(11, 10, 20, 0.5);
  }

  &__heading {
    color: $white;
    font-weight: bold;
    font-size: 48px;
    line-height: 65px;
    letter-spacing: 0.02em;
    margin-left: 16px;
    margin-top: 125px;
    position: relative;
    z-index: 3;
  }

  &__description {
    background-color: $accent-red;
    height: 64px;
    width: 130%;
    padding-left: 30%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(-30deg);
    transform-origin: left bottom;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    z-index: 3;
  }

  @media (min-width: $media-xs) {
    height: calc(100vh + 60px);
    
    &__heading {
      margin-top: 70px;
    }
  }

  @media (min-width: $media-sm) {
    height: 100vh;

    &__heading {
      margin-top: 270px;
      font-size: 72px;
      line-height: 98px;
    }

    &__description {
      height: 88px;
      padding-left: 20%;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.1em;
      bottom: 60px;
    }
  }

  @media (min-width: $media-md) {
    height: calc(100vh + 60px);

    &__heading {
      margin-top: 180px;
    }

    &__description {
      bottom: 0;
    }
  }

  @media (min-width: $media-lg) {
    &__wrapper {
      padding: 0 20%;
    }

    &__heading {
      margin-left: 0;
      margin-top: 275px;
    }
  }
}
</style>
<template>
  <div class="event-hero">
    <div class="event-hero__wrapper">
    <h1 class="event-hero__heading">
      {{ data.name }}
    </h1>
    <p class="event-hero__short-desk">
      Interactive IT Security Conference
    </p>
    <div class="event-her__stripes-wrapper">
      <div class="event-hero__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        {{ data.time }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="event-hero__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        {{ data.time }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="event-hero__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        {{ data.time }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="event-hero__icon"
        />
        Exploit Virtual Conference Platform
      </div>
    </div>
    <p class="event-hero__description">
      Please join us for ExploitCon, an exclusive one-day conference focused on providing the latest and greatest on cybersecurity.
    </p>
    <Button class="event-hero__register">
      register now
    </Button>
    </div>
  </div>
</template>

<script>
import Button from '~/components/common/Button';

export default {
  name: 'EventPageHero',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.event-hero {
  overflow: hidden;

  &__wrapper {
    width: 100%;
    padding: 86px 16px 40px 16px;
    background-color: $black;
    position: relative;
  }

  &__heading,
  &__register {
    position: relative;
    z-index: 2;
  }

  &__heading {
    color: $white;
    font-weight: bold;
    font-size: 48px;
    line-height: 65px;
    padding-right: 60px;
  }

  &__short-desk {
    line-height: 24px;
    margin-bottom: 340px;
  }

  &__stripe {
    width: 300%;
    min-width: max-content;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    font-weight: bold;
    position: absolute;

    &:nth-child(1) {
      background-color: $accent-blue;
      transform: rotate(-10deg);
      bottom: 30%;
      left: -100%;
    }

    &:nth-child(2) {
      background-color: $accent-red;
      transform: rotate(-30deg);
      bottom: 50%;
      left: -55%;
    }

    &:nth-child(3) {
      background-color: $accent-yellow;
      transform: rotate(10deg);
      bottom: 55%;
      left: -155%;
    }
  }

  &__icon {
    margin-right: 18px;
    &:nth-child(2) {
      margin: 0 12px;
    }
  }

  &__description {
    text-align: center;
    margin-bottom: 24px;
  }

  &__register {
    width: 100%;
  }

  @media (min-width: $media-xs) {
    &__short-desk {
      margin-bottom: 460px;
    }

    &__heading {
      padding-right: 30%;
    }

    &__stripe {
      &:nth-child(2) {
        left: -85%;
      }

      &:nth-child(3) {
        left: -125%;
      }
    }

    &__register {
      width: 328px;
      margin: 0 auto;
    }
  }

  @media (min-width: $media-sm) {
    &__wrapper {
      padding: 148px 24px 84px 24px;
    }

    &__heading {
      padding-right: 80%;
      font-size: 64px;
      line-height: 87px;
    }

    &__short-desk {
      margin-bottom: 396px;
    }

    &__description {
      text-align: right;
      padding-left: 30%;
    }

    &__register {
      margin: 0;
      float: right;
    }

    &__stripe {
      height: 88px;
      font-size: 24px;

      &:nth-child(1) {
        bottom: 27%;
      }

      &:nth-child(2) {
        bottom: 42%;
      }

      &:nth-child(3) {
        bottom: 47%;
        left: -120%;
      }
    }
  }

  @media (min-width: $media-md) {
    &__wrapper {
      height: 100vh;
      padding-bottom: 102px;
      display: flex;
      flex-flow: column;
    }

    &__heading {
      padding-right: 0;
    }

    &__short-desk {
      margin-bottom: 0;
    }

    &__description {
      margin-top: auto;
      padding-left: 50%;
      margin-bottom: 32px;
    }

    &__register {
      align-self: flex-end;
    }

    &__stripe {
     &:nth-child(1) {
        bottom: 30%;
      }

      &:nth-child(2) {
        bottom: 37%;
        left: -100%;
      }

      &:nth-child(3) {
        bottom: 52%;
        left: -100%;
      }
    }
  }

  @media (min-width: $media-lg) {
    height: calc(100vh + 60px);

    &__wrapper {
      padding: 150px 20%;
    }

    &__stripe {
     &:nth-child(1) {
        bottom: 40%;
      }

      &:nth-child(2) {
        bottom: -110px;
        transform-origin: bottom left;
        left: -88px;
        width: 150%;
      }
    }
  }
}
</style>

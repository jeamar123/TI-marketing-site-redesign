<template>
  <article class="headliner" :class="{'headliner--opened': isScheduleOpened}">
    <div class="headliner__heading-wrapper--xs">
      <Heading color="white" type="h3" class="headliner__heading">
        {{ data.speakerName }}
      </Heading>
      <p class="headliner__company">
        {{ data.speakerCompany }}
      </p>
    </div>
    <div class="headliner__image-wrapper">
      <img
        src="https://picsum.photos/300/500"
        :alt="`${data.speakerName}'s image`"
        class="headliner__image"
      />
    </div>
    <div class="headliner__text-wrapper">
      <div class="headliner__heading-wrapper--sm">
        <Heading color="white" type="h3" class="headliner__heading">
          {{ data.speakerName }}
        </Heading>
        <p class="headliner__company">
          {{ data.speakerCompany }}
        </p>
      </div>
      <div class="headliner__main-wrapper">
        <p class="headliner__track">
          {{ data.track }}
        </p>
        <Heading type="h4" class="headliner__title">
          {{ data.talkName }}
        </Heading>
        <p class="description__description">
          {{ talkDescription }}
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import { shortenText } from '~/assets/js/utils';
import Heading from '~/components/common/Heading';

export default {
  name: 'ScheduleHeadliner',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    isScheduleOpened: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {
    talkDescription() {
      return shortenText(this.data.talkDescription, 250);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.headliner {
  $self: &;
  cursor: pointer;
  padding-top: 38px;
  background-color: $black;
  transition: height 0.3s;

  &:nth-child(odd) {
    #{$self}__image-wrapper::before {
      left: calc(50% + 20px);
    }
  }

  &:nth-child(even) {
    #{$self}__image-wrapper::before {
      left: calc(50% - 20px);
    }
  }

  &:nth-child(3n + 1) {
    #{$self}__image-wrapper::before {
      background-color: $accent-red;
    }

    #{$self}__main-wrapper,
    #{$self}__track {
      background-color: $accent-yellow;
    }
  }

  &:nth-child(3n + 2) {
    #{$self}__image-wrapper::before {
      background-color: $accent-yellow;
    }

    #{$self}__main-wrapper,
    #{$self}__track {
      background-color: $accent-red;
    }
  }

  &:nth-child(3n + 3) {
    #{$self}__image-wrapper::before {
      background-color: $accent-red;
    }

    #{$self}__main-wrapper,
    #{$self}__track {
      background-color: $accent-blue;
    }
  }

  &__heading-wrapper {
    &--xs {
      margin-bottom: 8px;
      text-align: center;

      .heading {
        text-align: center !important;
      }
    }

    &--sm {
      display: none;
    }
  }

  &__image-wrapper {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      width: 240px;
      height: 360px;
      transform: translateX(-50%);
    }
  }

  &__image {
    display: block;
    margin: 0 auto;
    width: 240px;
    height: 360px;
    object-fit: cover;
    object-position: center;
    position: relative;
    z-index: 3;
  }

  &__main-wrapper {
    position: relative;
    z-index: 2;
    margin: 0 -16px;
    padding: 16px;
    padding-top: 262px;
    margin-top: -250px;
    color: $black;
    transition: color 0.3s, background-color 0.3s, height 0.3s;
  }

  &__track {
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    margin-bottom: 16px !important;
    transition: height 0.3s;
  }

  &__title {
    margin-bottom: 10px;
    transition: color 0.3s;
  }

  @media (min-width: $media-xs) {
    padding-top: 28px;
    display: flex;
    
    &--opened {
      #{$self}__main-wrapper {
        background-color: transparent !important;
        color: $white !important;
      }

      #{$self}__title {
        color: $white !important;
      }

      #{$self}__track {
        color: $black;
        height: 64px;
        display: flex;
        align-items: center;
        margin: 0 -16px;
        padding: 0 16px;
      }

      &:nth-child(odd) {
        #{$self}__track {
          margin-left: -252px;
          padding-left: 252px;
        }
      }

      &:nth-child(even) {
        #{$self}__track {
          margin-right: -252px;
          padding-right: 252px;
        }
      }
    }

    &:nth-child(odd) {
      #{$self}__main-wrapper {
        margin-left: -216px;
        padding-left: 252px;
      }

      #{$self}__heading-wrapper {
        &--sm {
          padding-left: 36px;
        }
      }
    }

    &:nth-child(even) {
      #{$self}__image-wrapper {
        right: 0;
        order: 2;
      }

      #{$self}__main-wrapper {
        margin-right: -216px;
        padding-right: 252px;
      }
    }

    &__heading-wrapper {
      &--xs {
        display: none;
      }

      &--sm {
        display: block;
        background-color: $black;
        margin-bottom: 40px;
      }
    }

    &__image-wrapper,
    &__image-wrapper::before,
    &__image {
      width: 200px;
      height: 320px;
    }

    &__main-wrapper {
      margin-top: 0;
      padding-top: 16px;
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 60px;

    &--opened {
      #{$self}__track {
        height: 88px;
        margin: 0 -24px;
        padding: 0 24px;
      }

      &:nth-child(odd) {
        #{$self}__track {
          margin-left: -260px;
          padding-left: 260px;
        }
      }

      &:nth-child(even) {
        #{$self}__track {
          margin-right: -260px;
          padding-right: 260px;
        }
      }
    }

    &:nth-child(odd) {
      #{$self}__main-wrapper {
        margin-left: -224px;
        padding-left: 260px;
      }

      #{$self}__heading-wrapper {
        &--sm {
          padding-left: 44px;
        }
      }
    }

    &:nth-child(even) {
      #{$self}__main-wrapper {
        margin-right: -224px;
        padding-right: 260px;
      }
    }

    &__main-wrapper {
      margin: 0 -24px;
      padding: 24px;
    }

    &__track {
      font-size: 24px;
      line-height: 24px;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 80px;

    &--opened {
      &:nth-child(odd) {
        #{$self}__track {
          margin-left: -368px;
          padding-left: 368px;
        }
      }

      &:nth-child(even) {
        #{$self}__track {
          margin-right: -368px;
          padding-right: 368px;
        }
      }
    }

    &:nth-child(odd) {
      #{$self}__main-wrapper {
        margin-left: -324px;
        padding-left: 368px;
      }
    }

    &:nth-child(even) {
      #{$self}__main-wrapper {
        margin-right: -324px;
        padding-right: 368px;
      }
    }

    &__image-wrapper,
    &__image-wrapper::before,
    &__image {
      width: 300px;
      height: 460px;
    }

    &__main-wrapper {
      padding-top: 34px;
      padding-bottom: 48px;
    }

    &__track {
      margin-bottom: 26px !important;
    }

    &__title {
      margin-bottom: 18px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 92px;

    &--opened {
      #{$self}__track {
        margin: 0 -20vw;
        padding: 0 20vw;
      }

      &:nth-child(odd) {
        #{$self}__track {
          margin-left: calc(-20vw - 380px - 20px - 96px);
          padding-left: calc(20vw + 380px + 20px + 96px);
        }
      }

      &:nth-child(even) {
        #{$self}__track {
          margin-right: calc(-20vw - 380px - 20px - 96px);
          padding-right: calc(20vw + 380px + 20px + 96px);
        }
      }
    }

    &:nth-child(odd) {
      #{$self}__main-wrapper {
        margin-left: calc(-20vw - 380px);
        padding-left: calc(20vw + 380px + 20px + 96px);
      }

      #{$self}__heading-wrapper {
        &--sm {
          padding-left: 116px;
        }
      }
    }

    &:nth-child(even) {
      #{$self}__main-wrapper {
        margin-right: calc(-20vw - 380px);
        padding-right: calc(20vw + 380px + 20px + 96px);
      }
    }

    &__heading-wrapper--sm {
      margin-top: 60px;
    }

    &__image-wrapper,
    &__image-wrapper::before,
    &__image {
      width: 380px;
      height: 600px;
    }

    &__main-wrapper {
      margin: 0 -20vw;
      padding: 0 20vw;
      padding-top: 36px;
      padding-bottom: 66px;
    }

    &__track {
      margin-bottom: 40px !important;
    }
  }
}
</style>

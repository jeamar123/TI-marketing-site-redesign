<template>
  <article class="event-card" @click="$router.push(`/${event.id}`)">
    <div class="event-card__img-wrapper">
      <div class="event-card__image"
        :style="{'background-image': `url(${bgPath})`}" />
    </div>
    <div class="event-card__text-wrapper">
      <Heading color="white" type="h3" class="event-card__heading">
        {{ event.shortName }}
      </Heading>
      <p class="event-card__text">
        {{ textFiltered }}
      </p>
      <p class="event-card__date">
        {{ event.date }}
      </p>
    </div>
  </article>
</template>

<script>
import moment from 'moment';
import { shortenText } from '~/assets/js/utils';
import Heading from '~/components/common/Heading';

export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {
    bgPath() {
      return require(`~/assets/img/bg/${this.event.city.toLowerCase()}.jpg`);
    },
    textFiltered() {
      return shortenText(this.event.description, 120);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.event-card {
  $self: &;
  cursor: pointer;

  &:nth-child(odd) {
    #{$self}__image {
      transform: translateX(-20px);
    }

    #{$self}__img-wrapper {
      transform: translateX(20px);
    }
  }

  &:nth-child(even) {
    #{$self}__image {
      transform: translateX(20px);
    }
  }

  &:nth-child(3n + 1) {
    #{$self}__img-wrapper::after {
      background-color: $accent-blue;
    }
  }

  &:nth-child(3n + 2) {
    #{$self}__img-wrapper::after {
      background-color: $accent-yellow;
    }
  }

  &:nth-child(3n + 3) {
    #{$self}__img-wrapper::after {
      background-color: $accent-red;
    }
  }

  &:hover {
    #{$self}__image::before {
      background-image: linear-gradient(89.82deg, rgba(20, 109, 242, 0.3) 0.15%, rgba(255, 0, 84, 0.3) 99.84%);
    }
  }

  &__img-wrapper {
    width: calc(100% - 20px);
    height: 180px;
    position: relative;
    margin-bottom: 28px;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $accent-blue;
      transform: translateY(20px);
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: 2;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-image: linear-gradient(89.82deg, rgba(20, 109, 242, 0.1) 0.15%, rgba(255, 0, 84, 0.1) 99.84%);
      transition: background-image 0.3s ease-out;
    }
  }

  &__heading {
    margin-bottom: 4px;
  }

  &__text {
    margin-bottom: 32px;
  }

  &__date {
    margin-bottom: 52px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    color: $white;
  }

  @media (min-width: $media-xs) {
    &__img-wrapper {
      height: 280px;
    }
  }

  @media (min-width: $media-sm) {
    &__img-wrapper {
      height: 440px;
    }
  }

  @media (min-width: $media-md) {
    display: flex;

    &:nth-child(odd) {
      flex-direction: row-reverse;

      #{$self}__img-wrapper {
        transform: translateX(0);
      }

      #{$self}__text-wrapper {
        padding-right: 60px;
        padding-left: 0;
      }
    }

    &__img-wrapper {
      height: 280px;
      margin-bottom: 0;
      width: calc(50% - 20px);
      flex-grow: 0;
    }

    &__text-wrapper {
      padding-left: 60px;
      width: 50%;
      flex-grow: 0;
    }

    &__text {
      margin-bottom: 58px;
    }

    &__date {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 0;
    }
  }

  @media (min-width: $media-lg) {
    &__img-wrapper {
      height: 360px;
    }
  }
}
</style>
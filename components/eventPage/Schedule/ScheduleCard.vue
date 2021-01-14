<template>
  <article
    class="talk"
    :class="`talk--${isLeft ? 'left' : 'right'}`"
  >
    <div class="talk__img-wrapper">
      <img
        src="https://picsum.photos/300/500"
        :alt="`${data.speakerName}'s image`"
        class="talk__image"
      />
    </div>
    <div class="talk__info-wrapper">
      <div class="talk__breef-wrapper">
        <p class="talk__time">
          {{ data.schedule }}
        </p>
        <Heading type="h3" class="talk__heading">
          {{ data.speakerName }}
        </Heading>
        <p class="talk__company">
          {{ data.speakerCompany }}
        </p>
        <Heading type="h4" class="talk__title">
          {{ data.talkName }}
        </Heading>
      </div>
      <p class="talk__description">
        {{ isFullDescription ? data.talkDescription : descriptionFiltered }}
      </p>
      <button
        v-if="hasReedMore"
        class="talk__read-more"
        @click="isFullDescription = !isFullDescription"
      >
        {{ isFullDescription ? 'less' : 'read more' }}
        <svg-icon
          name="arrow"
          width="24"
          height="16"
          fill="#fff"
          class="talk__icon"
        />
      </button>
    </div>
  </article>
</template>

<script>
import { shortenText } from '~/assets/js/utils';
import Heading from '~/components/common/Heading';

export default {
  name: 'SheduleCard',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
    isLeft: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Heading,
  },
  data: () => ({
    isFullDescription: false,
  }),
  computed: {
    descriptionFiltered() {
      return shortenText(this.data.talkDescription, 300);
    },
    hasReedMore() {
      return this.data.talkDescription.length > 300;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.talk {
  $self: &;
  padding-top: 34px;

  &--left:nth-child(even),
  &--right:nth-child(odd) {
    #{$self}__img-wrapper::before {
      left: 20px;
    }

    #{$self}__breef-wrapper {
      padding-left: 244px;
    }
  }

  &--left:nth-child(odd),
  &--right:nth-child(even) {
    #{$self}__img-wrapper {
      left: 20px;
      margin-left: calc(100% - 220px);

      &::before {
        left: -20px;
      }
    }

    #{$self}__breef-wrapper {
      padding-right: 244px;
    }
  }

  &__img-wrapper::before,
  &__image {
    width: 200px;
    height: 300px;
  }

  &__img-wrapper {
    position: relative;
    margin-bottom: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      background-color: var(--accent-color, #FF0054);
    }
  }

  &__image {
    object-fit: cover;
    object-position: center;
    position: relative;
    z-index: 3;
  }

  &__info-wrapper {
    color: $black;
  }

  &__breef-wrapper {
    margin: 78px 0;
    margin-top: calc(-300px + 70px);
  }

  &__time {
    margin-bottom: 6px;
  }

  &__company {
    margin-bottom: 18px;
  }

  &__read-more {
    background: none;
    padding: 0;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $white;
    text-transform: uppercase;
    transition: color 0.3s, opacity 0.3s;
    cursor: pointer;

    &:hover {
      color: var(--accent-color, #FF0054);

      #{$self}__icon {
        fill: var(--accent-color, #FF0054);
      }
    }

    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }
  }

  &__icon {
    margin-left: 8px;
    transition: fill 0.3s;
  }

  @media (min-width: $media-sm) {
    padding-top: 48px;
    display: flex;

    &--left:nth-child(even),
    &--right:nth-child(odd) {
      #{$self}__info-wrapper {
        padding-left: 44px;
      }
    }

    &--left:nth-child(odd),
    &--right:nth-child(even) {
      flex-direction: row-reverse;

      #{$self}__info-wrapper {
        padding-right: 44px;
      }
    }

    &__img-wrapper {
      margin-bottom: 0;
      margin-left: 0 !important;
      left: 0 !important;
    }

    &__breef-wrapper {
      padding: 0 !important;
      margin: 0;
    }

    &__time {
      margin-bottom: 18px;
    }

    &__title {
      margin-bottom: 18px;
    }

    &__read-more {
      margin-top: 18px;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 60px;

    &__company {
      margin-bottom: 26px;
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 80px;

    &--left:nth-child(even),
    &--right:nth-child(odd) {
      #{$self}__info-wrapper {
        padding-left: 116px;
      }
    }

    &--left:nth-child(odd),
    &--right:nth-child(even) {
      flex-direction: row-reverse;

      #{$self}__info-wrapper {
        padding-right: 116px;
      }
    }

    &__img-wrapper::before,
    &__image {
      width: 280px;
      height: 420px;
    }

    &__time {
      margin-bottom: 46px;
    }

    &__read-more {
      margin-top: 6px;
    }
  }
}
</style>

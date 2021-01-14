<template>
  <article class="talk">
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

  &__img-wrapper::before,
  &__image {
    width: 200px;
    height: 300px;
  }

  &__img-wrapper {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 20px;
      left: 20px;
      background-color: $accent-red;
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
    padding-left: 244px;
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
      color: $accent-red;

      #{$self}__icon {
        fill: $accent-red;
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

    &__info-wrapper {
      padding-left: 44px;
    }

    &__breef-wrapper {
      padding: 0;
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

    &__img-wrapper::before,
    &__image {
      width: 280px;
      height: 420px;
    }

    &__info-wrapper {
      padding-left: 116px;
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

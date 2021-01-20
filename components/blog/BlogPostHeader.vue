<template>
  <section class="post-header">
    <div
      class="post-header__wrapper"
      :style="`background-image: url(${post.head_picture})`"
    >
      <h1 class="post-header__title">
        {{ post.title }}
      </h1>
    </div>
    <div class="post-header__author">
      <span>
        {{ post.author }}
      </span>
      <svg-icon
        name="arrow"
        width="32"
        height="16"
        fill="#0B0A14"
        class="post-header__icon"
      />
      <div class="post-header__date">
        <span class="post-header__date-item">
          {{ weekday }}
        </span>
        <span class="post-header__date-item">
          {{ day }}
        </span>
        <span class="post-header__date-item">
          {{ time }}
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BlogPostHeader',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {},
  data: () => ({}),
  computed: {
    weekday() {
      return moment(this.post.created).format('ddd');
    },
    day() {
      return moment(this.post.created).format('MMM DD YYYY');
    },
    time() {
      return moment(this.post.created).format('h:mm a z');
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.post-header {
  overflow: hidden;
  position: relative;
  height: 100vh;

  &__wrapper {
    width: 100%;
    height: 100vh;
    background-color: $accent-red;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
  }

  &::before{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(11, 10, 20, 0.8);
  }

  &__title {
    color: $white;
    font-weight: bold;
    font-size: 32px;
    line-height: 44px;
    letter-spacing: 0.02em;
    margin-left: 16px;
    margin-top: 78px;
    position: relative;
    z-index: 3;
  }

  &__author {
    background-color: $accent-blue;
    height: 64px;
    width: 130%;
    padding-left: 10%;
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotate(-10deg);
    transform-origin: left bottom;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    z-index: 3;
    color: $black;
  }

  &__icon {
    margin-left: 16px;
  }

  &__date {
    display: flex;
  }

  &__date-item {
    padding: 0 16px;
    border-right: 2px solid $black;

    &:last-child {
      border-right: none;
    }
  }

  @media (min-width: $media-xs) {
    height: calc(100vh + 60px);
  }

  @media (min-width: $media-sm) {
    height: 100vh;

    &__title {
      margin-top: 230px;
      margin-left: 24px;
      font-size: 56px;
      line-height: 80px;
      width: 80%;
    }

    &__author {
      height: 88px;
      font-size: 24px;
      line-height: 24px;
      letter-spacing: 0.1em;
      bottom: 60px;
    }
  }

  @media (min-width: $media-md) {
    height: calc(100vh + 60px);

    &__title {
      margin-top: 178px;
      width: 75%;
    }

    &__author {
      bottom: 40px;
    }
  }

  @media (min-width: $media-lg) {
    height: 100vh;

    &__wrapper {
      padding: 0 20%;
    }

    &__title {
      margin-left: 0;
      margin-top: 266px;
      width: 80%;
    }

    &__author {
      bottom: 100px;
      padding-left: 20%;
    }
  }
}
</style>
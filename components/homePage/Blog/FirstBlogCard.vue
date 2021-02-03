<template>
  <article class="first-blog-card" @click="$router.push(`/blog/${post.id}`)">
    <div class="first-blog-card__image-wrapper">
      <img
        :src="post.head_picture"
        alt="Blog post image"
        class="first-blog-card__image"
      />
    </div>
    <Heading
      type="h3"
      color="white"
      class="first-blog-card__heading"
    >
      {{ post.title }}
    </Heading>
    <div class="first-blog-card__author">
      {{ post.author }}
    </div>
  </article>
</template>

<script>
import Heading from '~/components/common/Heading';

export default {
  name: 'FirstBlogCard',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.first-blog-card {
  position: relative;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 168px;
    transition: background-image 0.3s;
  }

  &::before {
    background-image: linear-gradient(180deg, rgba(11, 10, 20, 0) 0%, rgba(11, 10, 20, 0.7) 81.77%);
  }

  &:hover::after {
    background-image: linear-gradient(89.82deg, rgba(20, 109, 242, 0.2) 0.15%, rgba(255, 0, 84, 0.2) 99.84%);
  }

  &__image-wrapper,
  &__image {
    width: 100%;
    height: 168px;
  }

  &__image-wrapper {
    background-color: $accent-red;
    background-image: linear-gradient(rgba(11, 10, 20, 0.8), rgba(11, 10, 20, 0.8));
  }

  &__image {
    display: block;
    object-fit: cover;
    object-position: center;
    margin-bottom: 4px;
  }

  &__heading {
    text-align: left !important;
    margin-bottom: 8px;
  }

  &__author {
    height: 64px;
    margin: 0 -16px;
    padding-left: 16px;
    background-color: $accent-blue;
    display: flex;
    align-items: center;
    color: $black;
    font-weight: bold;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  @media (min-width: $media-xs) {
    &::before,
    &::after {
      height: 216px;
    }

    &__image-wrapper,
    &__image {
      height: 216px;
      margin-bottom: 0;
    }

    &__heading {
      margin-bottom: 0;
      margin-top: -100px;
      position: absolute;
      bottom: 82px;
      left: 24px;
      right: 24px;
      z-index: 3;
    }

    &__author {
      padding-left: 40px;
    }
  }

  @media (min-width: $media-sm) {
    &::before,
    &::after {
      height: 324px;
    }

    &__image-wrapper,
    &__image {
      height: 324px;
    }

    &__heading {
      bottom: 104px;
      right: 80px;
    }

    &__author {
      margin: 0 -24px;
      padding-left: 48px;
      height: 88px;
      font-size: 24px;
      line-height: 32px;
    }
  }

  @media (min-width: $media-md) {
    &::before,
    &::after {
      height: 400px;
    }

    &__image-wrapper,
    &__image {
      height: 400px;
    }

    &__heading {
      bottom: 24px + 88px + 24px;
      right: 300px;
    }

    &__author {
      margin: 0;
      position: absolute;
      left: -24px;
      right: -24px;
      bottom: 24px;
      z-index: 3;
    }
  }

  @media (min-width: $media-lg) {
    &__heading {
      right: 80px;
    }

    &__author {
      left: -20vw;
      right: -20vw;
      padding-left: calc(20vw + 24px);
    }
  }
}
</style>
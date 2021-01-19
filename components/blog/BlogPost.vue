<template>
  <article class="blog-post">
    <Header :post="post" class="blog-post__header" />
    <section class="blog-post__description">
      {{ post.text }}
    </section>
  </article>
</template>

<script>
import Footer from '../features/Footer.vue';
import Header from './BlogPostHeader';

export default {
  name: 'BlogPost',
  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Header,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.blog-post {
  &__description {
    text-align: justify;
    padding: 38px 16px 34px 16px;

    @media (min-width: $media-xs) {
      padding-top: 0;
    }

    @media (min-width: $media-sm) {
      padding: 64px 82px;
      padding-bottom: 52px;
    }

    @media (min-width: $media-md) {
      padding: 64px 108px;
      padding-bottom: 56px;
      padding-top: 4px;
    }

    @media (min-width: $media-lg) {
      padding: 64px 25%;
    }
  }
}
</style>
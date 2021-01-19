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

</style>
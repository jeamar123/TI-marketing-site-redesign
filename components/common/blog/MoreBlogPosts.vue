<template>
  <div class="more-posts">
    <BlogCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      class="more-posts__card"
    />
  </div>
</template>

<script>
import BlogCard from './BlogCard';

export default {
  name: 'MoreBlogPosts',
  props: {
    posts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    BlogCard,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.more-posts {
  display: grid;
  grid-gap: 24px;

  @media (min-width: $media-xs) {
    grid-template-columns: repeat(2, 1fr);

    &__card {
      &:last-child {
        display: none;
      }
    }
  }

  @media (min-width: $media-md) {
    grid-template-columns: repeat(3, 1fr);
    
    &__card {
      &:last-child {
        display: block;
      }
    }
  }
}
</style>
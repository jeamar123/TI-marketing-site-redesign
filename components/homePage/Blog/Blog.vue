<template>
  <GenericSection class="blog">
    <Heading color="white" text-align="center" class="blog__heading">
      Blog
    </Heading>
    <FirstBlogCard :post="blogPosts[0]" class="blog__first-card"/>
    <MoreBlogPosts :posts="cardPosts" />
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import FirstBlogCard from './FirstBlogCard';
import MoreBlogPosts from '~/components/common/blog/MoreBlogPosts';

export default {
  name: 'HomePageBlog',
  props: {
    blogPosts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenericSection,
    Heading,
    FirstBlogCard,
  },
  data: () => ({}),
  computed: {
    cardPosts() {
      const posts = [...this.blogPosts];
      posts.splice(0, 1);

      return posts.splice(0, 3);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.blog {
  padding-top: 24px;

  &__heading {
    margin-bottom: 22px;
  }

  &__first-card {
    margin-bottom: 32px;
  }
}
</style>
<template>
  <GenericSection class="blog">
    <Heading color="white" text-align="center" class="blog__heading">
      Blog
    </Heading>
    <FirstBlogCard :post="blogPosts[0]" class="blog__first-card"/>
    <!-- <div class="blog__cards-wrapper">
      <BlogCard
        v-for="post in cardPosts"
        :key="post.id"
        :post="post"
        class="blog__card"
      />
    </div> -->
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
  props: {},
  components: {
    GenericSection,
    Heading,
    FirstBlogCard,
  },
  data: () => ({
    blogPosts: [
      {
        id: 1,
        img: 'https://picsum.photos/600/800',
        title: "Apple's Head of Security Charged in Bribery Case: Here's How It Happened",
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 2,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 3,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 4,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 5,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 6,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 7,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
      {
        id: 8,
        img: 'https://picsum.photos/600/800',
        title: 'Test Title for a secondary blog post card',
        author: 'Brian Page',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius',
      },
    ],
  }),
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
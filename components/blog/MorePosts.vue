<template>
  <GenericSection class="more-blog">
      <Heading
        color="white"
        text-align="center"
        class="more-blog__heading"
      >
        Blog
      </Heading>
      <MoreBlogPosts
        :posts="showAllRemaining ? postsRemaining : shortPosts"
        class="more-blog__posts"
      />
      <Button
        class="more-blog__button"
        @click="showAllRemaining = !showAllRemaining"
      >
        {{ showAllRemaining ? 'show less' : 'show more' }}
      </Button>
    </GenericSection>
</template>

<script>
import Button from '~/components/common/Button';

export default {
  name: 'MorePosts',
  props: {
    allPosts: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Button,
  },
  data: () => ({
    showAllRemaining: false,
  }),
  computed: {
    postsRemaining() {
      return this.allPosts.filter(({ id }) => id !== this.$route.params.post);
    },
    shortPosts() {
      return this.postsRemaining.splice(0, 3);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.more-blog {
  &__heading {
    margin-bottom: 32px;
  }

  &__button {
    display: none;
  }

  @media (min-width: $media-sm) {
    &__heading {
      margin-bottom: 62px;
    } 
  }

  @media (min-width: $media-lg) {
    &__posts {
      margin-bottom: 42px;
    }

    &__button {
      display: block;
      width: 280px;
      margin: 0 auto;
      margin-bottom: 32px;
    }
  }
}
</style>
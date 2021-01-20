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
        :posts="allPosts"
        class="more-blog__posts"
      />
    </GenericSection>
</template>

<script>
export default {
  name: '',
  props: {
    allPosts: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.more-blog {
  &__heading {
    margin-bottom: 32px;
  }

  @media (min-width: $media-sm) {
    &__heading {
      margin-bottom: 62px;
    } 
  }
}
</style>
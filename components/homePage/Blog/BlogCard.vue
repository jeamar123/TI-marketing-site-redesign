<template>
  <article class="blog-card">
    <img :src="post.img" alt="Blog post image" class="blog-card__image" />
    <Heading color="white" type="h4" class="blog-card__heading">
      {{ post.title }}
    </Heading>
    <p class="blog-card__text">
      {{ textFiltered }}
    </p>
  </article>
</template>

<script>
import { shortenText } from '~/assets/js/utils';
import Heading from '~/components/common/Heading';

export default {
  name: 'BlogCard',
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
  computed: {
    textFiltered() {
      return shortenText(this.post.description, 120);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.blog-card {
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 184px;
    width: 100%;
    top: 0;
    left: 0;
    transition: background-image 0.3s;
  }

  &::before {
    background-image: linear-gradient(180deg, rgba(11, 10, 20, 0) 0%, rgba(11, 10, 20, 0.7) 81.77%);
  }

  &:hover::after {
    background-image: linear-gradient(89.82deg, rgba(20, 109, 242, 0.2) 0.15%, rgba(255, 0, 84, 0.2) 99.84%);
  }

  &__image {
    height: 184px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 4px;
  }

  &__heading {
    margin-bottom: 4px;
  }
}
</style>
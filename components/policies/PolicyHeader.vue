<template>
  <header
    class="policy-header"
    :class="{'policy-header--flat': !headingFollower}"
  >
    <Heading
      type="h1"
      color="white"
      text-align="center"
      class="policy-header__heading"
    >
      {{ heading }}
    </Heading>
    <p
      v-if="headingFollower"
      class="policy-header__heading-follower"
    >
      {{ headingFollower }}
    </p>
  </header>
</template>

<script>
import Heading from '~/components/common/Heading';

export default {
  name: 'PolicyHeader',
  props: {
    heading: {
      type: String,
      default: '',
    },
    headingFollower: {
      type: String,
      default: '',
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

.policy-header {
  background-color: $black;
  padding: 77px 16px 37px 16px;

  &--flat {
    padding-bottom: 77px;
  }

  &__heading-follower {
    margin-top: 8px;
    text-align: center;
  }

  @media (min-width: $media-xs) {
    padding: 77px 16px 47px 16px;

    &--flat {
      padding-bottom: 77px;
    }
  }

  @media (min-width: $media-sm) {
    padding: 168px 12% 64px 12%;

    &--flat {
      padding-bottom: 83px;
    }
  }

  @media (min-width: $media-md) {
    padding: 178px 12% 66px 12%;

    &--flat {
      padding-bottom: 146px;
    }
  }

  @media (min-width: $media-lg) {
    padding: 178px 20% 58px 20%;

    &--flat {
      padding-bottom: 106px;
    }
  }

  @media (min-width: $media-xl) {
    padding: 178px 25% 58px 25%;

    &--flat {
      padding-bottom: 106px;
    }
  }
}
</style>
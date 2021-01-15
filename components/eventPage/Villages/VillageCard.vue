<template>
  <article class="village">
    <img
      src="https://picsum.photos/200/300"
      :alt="village.name"
      class="village__image"
    />
    <div class="village__text-wrapper">
      <Heading type="h4" class="village__heading">
        {{ village.name }}
      </Heading>
      <p class="village__description">
        {{ village.description }}
      </p>
    </div>
  </article>
</template>

<script>
import Heading from '~/components/common/Heading';

export default {
  name: 'VillageCard',
  props: {
    village: {
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

.village {
  padding: 8px;
  padding-bottom: 14px;
  border: 1px solid $light-gray;
  transition: border 0.3s, backgound-color 0.3s, color 0.3s;

  &:hover {
    border-color: $accent-red;
    background-color: $accent-red;
    color: $black;
  }

  &__image {
    height: 160px;
    width: 100%;
    object-fit: cover;
    object-position: center;
    margin-bottom: 8px;
  }

  &__text-wrapper {
    padding: 0 16px;
  }

  &__heading {
    margin-bottom: 4px;
  }
}
</style>
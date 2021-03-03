<template>
  <TextSection
    :heading="data.title"
    :text="data.description"
    align-heading="right"
    is-event-page
    is-reverse
    class="apply"
  >
    <Button
      color="black"
      class="apply__button"
      @click="$router.push(`/${$route.params.event}/cfp`)"
    >
      apply
    </Button>
  </TextSection>
</template>

<script>
import TextSection from '~/components/common/TextSection';
import Button from '~/components/common/Button';

export default {
  name: 'EventPageApply',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    TextSection,
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.apply {
  &__button {
    width: 100%;
    margin-top: 24px;
  }

  @media (min-width: $media-sm) and (max-width: $media-md - 1px) {
    padding-top: 0;
  }

  @media (min-width: $media-md) {
    &__button {
      width: 80%;
    }
  }
}
</style>
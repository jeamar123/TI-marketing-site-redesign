<template>
  <component
    :is="type"
    :style="{'text-align': textAlign}"
    class="heading">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    type: {
      type: String,
      default: 'h2',
    },
    textAlign: {
      type: String,
      default: 'left',
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

.heading {
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.02em;
  color: $black;

  @media (min-width: $media-sm) {
    font-size: 56px;
    line-height: 76px;
  }

  @media (max-width: $media-sm - 1px) {
    text-align: center!important;
  }
}
</style>
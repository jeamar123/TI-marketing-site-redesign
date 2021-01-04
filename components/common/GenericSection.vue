<template>
  <section
    :style="{
      'background-color': bgColor === 'black' ? '#0B0A14' : '#fff',
      'color': bgColor === 'black' ? '#A8A2CE' : ' #3B3751',
    }"
    class="section"
  >
    <slot />
  </section>
</template>

<script>
export default {
  name: 'GenericSection',
  props: {
    bgColor: {
      type: String,
      default: 'black',
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

.section {
  padding: 38px 16px;
  padding-bottom: 0;

  @media (min-width: $media-sm) {
    padding: 100px 24px;
  }

  @media (min-width: $media-lg) {
    padding: 100px 20%;
  }
}
</style>
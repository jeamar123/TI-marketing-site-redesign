<template>
  <div class="sponsor-card">
    <img :src="imgSrc" :alt="`${sponsor} logo`" class="sponsor-card__image" />
  </div>
</template>

<script>
export default {
  name: 'SponsorsCard',
  props: ['sponsor'],
  components: {},
  data: () => ({}),
  computed: {
    imgSrc() {
      return require('~/assets/img/sponsorImg.png');
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.sponsor-card {
  $card-size: 144px;
  width: $card-size;
  height: $card-size;
  border: 1px solid $light-gray;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: $media-xs) {
    $card-size: 152px;
    width: $card-size;
    height: $card-size;
  }

  @media (min-width: $media-sm) {
    $card-size: 224px;
    width: $card-size;
    height: $card-size;
  }

  @media (min-width: $media-md) {
    $card-size: 306px;
    width: $card-size;
    height: $card-size;
  }
}
</style>
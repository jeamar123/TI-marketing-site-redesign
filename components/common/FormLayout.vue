<template>
  <div class="form-layout">
    <div class="form-layout__info-wrapper">
      <slot name="info" />
    </div>
    <div class="form-layout__form-wrapper">
      <slot name="form" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormLayout',
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.form-layout {
  &__heading {
    margin-bottom: 4px;
  }

  &__text {
    margin-bottom: 16px;
    text-align: center;
  }

  &__button {
    width: 100%;
  }

  &__link {
    color: $accent-blue;
    text-decoration: underline;
    transition: text-decoration 0.3s, opacity 0.3s;

    &:hover {
      text-decoration: none;
    }

    &:active {
      opacity: 0.6;
    }
  }

  @media (min-width: $media-sm) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__info-wrapper {
      margin-right: 24px;
      max-width: 50%;
    }

    &__text {
      text-align: left;
    }

    &__form-wrapper {
      min-width: 344px;
      max-width: 454px;
      width: 50%;
    }
  }

  @media (min-width: $media-md) {
    &__info-wrapper {
      margin-right: 32px;
    }

    &__form-wrapper {
      min-width: 454px;
      max-width: 562px;
      width: 50%;
    }
  }

  @media (min-width: $media-lg) {
    &__form-wrapper {
      min-width: 50%;
      max-width: 562px;
    }
  }
}
</style>
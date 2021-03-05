<template>
  <div class="error">
    <div class="error__wrapper">
      <div class="error__header">
        <slot name="header" />
      </div>
      <div class="error__text">
        <slot name="text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error',
  props: {},
  components: {},
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.error {
  padding: 18px 52px;
  display: flex;
  align-items: center;
  background-image: linear-gradient(90deg, rgba(246, 37, 75, 0.15) 0%, rgba(19, 17, 34, 0.5) 26.36%);

  &::before {
    content: '!';
    width: 26px;
    height: 26px;
    border-radius: 100%;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    background-color: $error-red;
    color: $black;
    font-weight: bold;
    font-size: 20px;
    margin-right: 26px;
  }

  &__header {
    font-weight: bold;
    color: $error-red;
    line-height: 1.3;
    margin-bottom: 4px;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
  }

  &__link {
    border: none;
    background: transparent;
    padding: 0;
    color: $accent-blue;
    text-decoration: underline;
    cursor: pointer;
    transition: text-decoration 0.3s, opacity 0.3s;

    &:hover {
      text-decoration: none;
    }

    &:active {
      opacity: 0.6;
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
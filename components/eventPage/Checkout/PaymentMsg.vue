<template>
  <GenericSection class="payment-msg">
    <Heading type="h3" color="white" class="payment-msg__heading">
      {{ message }}
      <span v-if="isCancel">
        You can choose new tickets
        <a :href="`${baseUrl}/${$route.params.event}/checkout`" class="payment-msg__link">
          here
        </a>
      </span>
    </Heading>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';

export default {
  name: 'PaymentMsg',
  props: {
    message: {
      type: String,
      default: '',
    },
    isCancel: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    GenericSection,
    Heading,
  },
  data: () => ({}),
  computed: {
    baseUrl() {
      return window.location.origin;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.payment-msg {
  &__heading {
    padding: 10% 15%;
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
}
</style>
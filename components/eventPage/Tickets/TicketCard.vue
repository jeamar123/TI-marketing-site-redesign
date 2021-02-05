<template>
  <article class="ticket" :class="{'ticket--checkout': isCheckout}">
    <p class="ticket__price">
      {{ ticket.price }}$
    </p>
    <Heading
      v-if="isCheckout"
      type="h3"
      color="white"
      class="ticket__heading"
    >
      {{ticket.type}} ticket
    </Heading>
    <dl class="ticket__access">
      <dt class="ticket__access-desc">
        This pass includes access to:
      </dt>
      <dd
        v-for="item in ticket.access"
        :key="item.vueKey"
        class="ticket__access-item"
      >
        {{ item }}
      </dd>
    </dl>
    <Input
      v-if="isCheckout"
      v-model="ticketsQty"
      :name="`${ticket.type}-qty`"
      label="Tickets quantity"
      @input="$emit('input', ticketsQty)"
      class="ticket__quantity"
    />
    <Button
      v-else
      is-smaller
      class="ticket__get"
    >
      get tickets
    </Button>
  </article>
</template>

<script>
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'TicketCard',
  props: {
    ticket: {
      type: Object,
      default: () => ({}),
    },
    isCheckout: {
      type: Boolean,
      default: false,
    },
    ticketsQty: {
      type: String,
      default: '0',
    },
  },
  components: {
    Heading,
    Input,
    Button,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.ticket {
  $self: &;
  padding: 24px;
  color: $white;
  display: flex;
  flex-flow: column;
  border: 1px solid $purple-black;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover,
  &:first-child:not(.ticket--checkout) {
    background-color: $accent-red;
    border-color: $accent-red;

    #{$self}__get {
      background-color: $white;
      color: $accent-red;
    }

    .input__control,
    .input__label,
    .input__control:focus ~ .input__label {
      background-color: $accent-red;
      transition: background-color 0.3s !important;
    }
  }

  .input__control,
  .input__label,
  .input__control:focus ~ .input__label {
    transition: background-color 0.3s !important;
  }

  &--checkout {
    #{$self}__price {
      font-size: 32px;
      line-height: 44px;
      margin-bottom: 8px;
    }
  }

  &__price {
    font-weight: bold;
    font-size: 72px;
    line-height: 98px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 14px;
  }

  &__heading {
    text-align: center !important;
  }

  &__access {
    margin-bottom: 18px;
  }

  &__access-item {
    display: flex;
    align-items: baseline;

    &::before {
      content: '\2013';
      width: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &__get {
    width: 100%;
    transition: background-color 0.3s;

    &:hover {
      border-color: $white !important;
    }
  }

  &__get,
  &__quantity {
    margin-top: auto;
  }
}
</style>
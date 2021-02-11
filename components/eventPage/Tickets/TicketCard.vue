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
      {{ticket.title}} ticket
    </Heading>
    <dl class="ticket__access">
      <dt class="ticket__access-desc">
        This pass includes access to:
      </dt>
      <dd
        v-for="item in ticket.features"
        :key="item"
        class="ticket__access-item"
      >
        {{ item }}
      </dd>
    </dl>
    <template v-if="isCheckout">
      <Input
        v-for="field in formFields"
        :key="field"
        v-model="form[field].value"
        :name="`${ticket.type}-qty`"
        :label="form[field].label"
        :error="form[field].error"
        @blur="validateField(field, form)"
        @input="inputHandler(field)"
        class="ticket__quantity"
      />
    </template>
    <Button
      v-else
      is-smaller
      class="ticket__get"
      @click="$router.push(`${$route.params.event}/checkout`)"
    >
      get tickets
    </Button>
  </article>
</template>

<script>
import { validateField, clearError } from '~/assets/js/validation';
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
  },
  components: {
    Heading,
    Input,
    Button,
  },
  data() {
    return {
      form: {
        quantity: {
          value: '0',
          error: '',
          rule: [`maxValue|${this.ticket.max}`],
          label: 'Tickets quantity',
        },
      },
    }
  },
  computed: {
    formFields() {
      return Object.keys(this.form);
    },
  },
  methods: {
    validateField,
    clearError,
    inputHandler(field) {
      this.clearError(field, this.form);
      this.$emit('input', this.form[field].value);
    },
  },
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
  cursor: pointer;
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
    margin-bottom: 8px;
  }

  &__access {
    margin-bottom: 32px;
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

  .input--error .input__label,
  .input--error .input__error {
    color: $white !important;
  }

  .input--error .input__control {
    border-color: $white !important;
  }
}
</style>
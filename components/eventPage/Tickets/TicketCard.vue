<template>
  <article class="ticket">
    <p class="ticket__price">
      {{ ticket.price }}$
    </p>
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
    <Button
      is-smaller
      class="ticket__get"
    >
      get tickets
    </Button>
  </article>
</template>

<script>
import Button from '~/components/common/Button';

export default {
  name: 'TicketCard',
  props: {
    ticket: {
      type: Object,
      default: () => ({}),
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

.ticket {
  $self: &;
  padding: 24px;
  color: $white;
  display: flex;
  flex-flow: column;
  border: 1px solid $purple-black;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover,
  &:first-child {
    background-color: $accent-red;
    border-color: $accent-red;

    #{$self}__get {
      background-color: $white;
      color: $accent-red;
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
    margin-top: auto;
    transition: background-color 0.3s;

    &:hover {
      border-color: $white !important;
    }
  }
}
</style>
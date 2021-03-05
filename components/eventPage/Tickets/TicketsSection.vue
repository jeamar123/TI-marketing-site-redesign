<template>
  <GenericSection class="tickets">
    <Heading
      color="white"
      text-align="center"
      class="tickets__heading"
    >
      Tickets
    </Heading>
    <p class="tickets__text">
      Access the conference by either
      <router-link
        :to="`/${$route.params.event}/join`"
        class="tickets__redeem"
      >
        redeeming a sponsor code
      </router-link>
      or purchasing a ticket on the website.
    </p>
    <div class="tickets__wrapper">
      <Card
        v-for="ticket in tickets"
        :key="ticket.price"
        :ticket="ticket"
        class="tickets__ticket"
      />
    </div>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Card from './TicketCard';

export default {
  name: 'TicketsSection',
  props: {
    tickets: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenericSection,
    Heading,
    Card,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.tickets {
  &__text {
    text-align: center;
    margin-bottom: 24px;
  }

  &__ticket {
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__redeem {
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
    &__heading {
      margin-bottom: 4px;
    }

    &__text {
      margin-bottom: 72px;
    }

    &__ticket {
      margin-bottom: 0;
    }

    &__wrapper {
      display: grid;
      grid-gap: 8px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
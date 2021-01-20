<template>
  <GenericSection class="events">
    <Heading color="white" text-align="center" class="events__heading">
      Upcoming events
    </Heading>
    <div class="events__list">
      <EventCard
        v-for="event in eventsList"
        :key="event.id"
        :event="event"
        class="events__card"
      />
    </div>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import EventCard from './EventCard';

export default {
  name: 'HomePageEvents',
  props: {
    eventsList: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenericSection,
    Heading,
    EventCard,
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.events {
  &__heading {
    margin-bottom: 22px;
  }

  &__list {
    display: flex;
    flex-flow: column;
  }

  @media (min-width: $media-md) {
    &__heading {
      margin-bottom: 64px;
    }

    &__card {
      margin-bottom: 100px;
    }
  }
}
</style>

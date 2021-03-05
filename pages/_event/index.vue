<template>
  <div :style="{'scroll-behavior': 'smooth'}">
    <Hero :event="cityData" />
    <About
      :name="cityData.event.name"
      :description="cityData.event.description"
      id="about"
    />
    <Apply id="apply-talk" />
    <Schedule
      :data="eventData.schedule"
      id="schedule"
    />
    <Villages
      :data="eventData.villages"
      id="villages"
    />
    <Volunteering id="volunteering" />
    <Sponsors
      :data="eventData.sponsors"
      id="sponsors"
    />
    <Tickets
      :tickets="cityData.event.ticket_type"
      id="tickets"
    />
    <Contacts />
  </div>
</template>

<script>
import eventData from '~/static/event.json';
import Hero from '~/components/eventPage/EventHero';
import About from '~/components/eventPage/EventAbout';
import Apply from '~/components/eventPage/EventApply';
import Schedule from '~/components/eventPage/Schedule/Schedule';
import Villages from '~/components/eventPage/Villages/Villages';
import Volunteering from '~/components/eventPage/Volunteering';
import Sponsors from '~/components/eventPage/Sponsors/SponsorsSection';
import Tickets from '~/components/eventPage/Tickets/TicketsSection';
import Contacts from '~/components/eventPage/ContactForm';

export default {
  name: 'EventPage',
  props: {},
  components: {
    Hero,
    About,
    Apply,
    Schedule,
    Villages,
    Volunteering,
    Sponsors,
    Tickets,
    Contacts,
  },
  async asyncData({ store, route }) {
    let upcomingEvents = null;
    let cityData = null;

    await store.dispatch('crud/GET', { route: '/admin/event/upcoming' })
      .then (data => { upcomingEvents = data });

    const currentCity = upcomingEvents
      .find(({ id }) => id === route.params.event).location;

    return store.dispatch('crud/GET', { route: `city/${currentCity}` })
      .then(data => {
        cityData = data;
        return { cityData };
      })
      .catch(err => { 
        console.log(err);
        router.push('/');
      })
  },
  data: () => ({
    eventData,
  }),
  computed: {},
  methods: {},
};
</script>

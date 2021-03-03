<template>
  <div>
    <Hero :event="cityData" />
    <About :name="cityData.name" :description="cityData.description" />
    <Apply :data="eventData.apply" />
    <Schedule :data="eventData.schedule" />
    <Villages :data="eventData.villages" />
    <Volunteering />
    <Sponsors :data="eventData.sponsors" />
    <Tickets :tickets="cityData.ticket_type" />
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
  asyncData({ store, route }) {
    let cityData = null;

    return store.dispatch('crud/GET', { route: `public/event/${route.params.event}` })
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

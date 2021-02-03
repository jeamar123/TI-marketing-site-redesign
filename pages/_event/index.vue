<template>
  <div>
    <Hero :data="eventData.hero" />
    <About :data="eventData.about" />
    <Apply :data="eventData.apply" />
    <Schedule :data="eventData.schedule" />
    <Villages :data="eventData.villages" />
    <Volunteering />
    <Sponsors :data="eventData.sponsors" />
    <Tickets :data="eventData.tickets" />
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
  asyncData({ store, router }) {
    let cityData = null;
// use store to get city for route 
// or get all events here than search for needed one and send event
// or if there's no data in store about event, get all events and search, but if there is data in store - use that one
    store.dispatch('crud/GET', { route: '/city/oregon' })
      .then(data => { cityData = data })
      .catch(data => { 
        console.log(data);
        router.push('/');
      })
  },
  mounted() {
    this.$store.dispatch('crud/GET', { route: `public/event/${this.$route.params.event}` })
      .then(data => { console.log(data) });
  },
  data: () => ({
    eventData,
  }),
  computed: {},
  methods: {},
};
</script>

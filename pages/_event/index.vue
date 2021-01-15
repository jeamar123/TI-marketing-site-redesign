<template>
  <div>
    <Hero :data="eventData.hero" />
    <About :data="eventData.about" />
    <Apply :data="eventData.apply" />
    <Schedule :data="eventData.schedule" />
    <Villages :data="eventData.villages" />
    <Volunteering />
    <Sponsors :data="eventData.sponsors" />
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
  },
  data: () => ({
    eventData,
  }),
  computed: {},
  methods: {},
};
</script>

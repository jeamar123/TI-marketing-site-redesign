<template>
  <div>
    <Hero :data="eventData.hero" />
    <About :data="eventData.about" />
    <Apply :data="eventData.apply" />
  </div>
</template>

<script>
import eventData from '~/static/event.json';
import Hero from '~/components/eventPage/EventHero';
import About from '~/components/eventPage/EventAbout';
import Apply from '~/components/eventPage/EventApply';

export default {
  name: 'EventPage',
  props: {},
  components: {
    Hero,
    About,
    Apply,
  },
  data: () => ({
    eventData,
  }),
  computed: {},
  methods: {},
};
</script>

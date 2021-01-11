<template>
  <div>
    <Hero :data="fakeData.hero" />
  </div>
</template>

<script>
import fakeData from '~/static/event.json';
import Hero from '~/components/eventPage/Hero';

export default {
  name: 'EventPage',
  props: {},
  components: {
    Hero,
  },
  data: () => ({
    fakeData,
  }),
  computed: {},
  methods: {},
};
</script>

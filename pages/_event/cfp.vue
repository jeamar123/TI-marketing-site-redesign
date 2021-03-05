<template>
  <div>
    <Cfp :event="event" />
  </div>
</template>

<script>
import Cfp from '~/components/eventPage/Cfp/Cfp';

export default {
  name: 'CfpPage',
  props: {},
  components: {
    Cfp,
  },
  async asyncData({ store, route }) {
    const events = await store.dispatch('crud/GET', { route: '/admin/event/upcoming' })
      .then (data => data);

    return {
      event: events.find(item => item.id === route.params.event),
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

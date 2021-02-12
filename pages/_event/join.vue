<template>
  <Join :event="event" />
</template>

<script>
import Join from '~/components/eventPage/Join';

export default {
  name: 'JoinPage',
  props: {},
  components: {
    Join,
  },
  async asyncData({ store, route }) {
    const events = await store.dispatch('crud/GET', { route: '/admin/event/upcoming' })
      .then(data => data);

    return {
      event: events.find(item => item.id === route.params.event),
    }
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

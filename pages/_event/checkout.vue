<template>
  <Checkout :event="event" />
</template>

<script>
import Checkout from '~/components/eventPage/Checkout/Checkout';

export default {
  name: 'EventCheckout',
  components: {
      Checkout,
  },
  async asyncData({ store, route }) {
    const events = await store.dispatch('crud/GET', { route: '/admin/event/upcoming' })
      .then (data => data);

    return {
      event: events.find(item => item.id === route.params.event),
    }
  }
}
</script>

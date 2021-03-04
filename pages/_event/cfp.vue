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
  asyncData({ store, route }) {
    let event = null;

    return store.dispatch('crud/GET', { route: `public/event/${route.params.event}` })
      .then(data => {
        event = data;
        return { event };
      })
      .catch(err => { 
        console.log(err);
        router.push('/');
      })
  },
  data: () => ({}),
  computed: {},
  methods: {},
};
</script>

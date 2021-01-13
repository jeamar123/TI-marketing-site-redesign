<template>
  <GenericSection class="schedule">
    <Heading color="white" class="schedule__heading">
      Schedule
    </Heading>
    <div>
      <Headliner :data="dataArr[0][0]" />
      <Headliner :data="dataArr[0][0]" />
      <Headliner :data="dataArr[0][0]" />
      <Headliner :data="dataArr[0][0]" />
      <Headliner :data="dataArr[0][0]" />
      <Headliner :data="dataArr[0][0]" />
    </div>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import Headliner from './ScheduleHeadliner';

export default {
  name: 'EventPageSchedule',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    GenericSection,
    Heading,
    Headliner,
  },
  data: () => ({}),
  computed: {
    dataArr() {
      return Object.values(this.data);
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';
</style>
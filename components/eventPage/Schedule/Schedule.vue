<template>
  <GenericSection class="schedule">
    <Heading color="white" class="schedule__heading">
      Schedule
    </Heading>
    <div>
      <TrackList
        v-for="(track, index) in dataArr"
        :key="index"
        :track="track"
        :is-left="Boolean((index + 1) % 2)"
      />
    </div>
  </GenericSection>
</template>

<script>
import GenericSection from '~/components/common/GenericSection';
import Heading from '~/components/common/Heading';
import TrackList from './ShceduleList';

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
    TrackList,

    Headliner
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
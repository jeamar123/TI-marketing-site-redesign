<template>
  <div class="shedule">
    <Headliner
      :data="headliner"
      :is-schedule-opened="isScheduleOpened"
      class="schedule__headliner"
      @click.native="isScheduleOpened = !isScheduleOpened"
    />
    <transition name="fade">
      <div v-show="isScheduleOpened" class="schedule__talks-list">
        <Card
          v-for="(talk, index) in talks"
          :key="index"
          :data="talk"
          class="schedule__talk"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Headliner from './ScheduleHeadliner';
import Card from './ScheduleCard';

export default {
  name: 'SheduleList',
  props: {
    track: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Headliner,
    Card,
  },
  data: () => ({
    isScheduleOpened: false,
  }),
  computed: {
    headliner() {
      return this.track[0];
    },

    talks() {
      const talks = [...this.track];
      talks.splice(0, 1);

      return talks;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.schedule {
  &__talks-list {
    margin: 0 -16px;
    padding: 0 16px 40px 16px;
    background-color: $accent-yellow;
  }

  @media (max-width: $media-xs - 1px) {
    &__talks-list {
      display: none !important;
    }
  }

  @media (min-width: $media-sm) {
    &__talks-list {
      margin: 0 -24px;
      padding: 30px 24px 60px 24px;
    }
  }

  @media (min-width: $media-md) {
    &__talks-list {
      padding-top: 60px;
    }
  }

  @media (min-width: $media-lg) {
    &__talks-list {
      margin: 0 -20vw;
      padding: 112px 20vw 140px 20vw;
    }
  }
}
</style>

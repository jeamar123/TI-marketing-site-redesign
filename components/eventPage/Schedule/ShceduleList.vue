<template>
  <div class="track">
    <Headliner
      :data="headliner"
      :is-left="isLeft"
      :is-schedule-opened="isScheduleOpened"
      class="track__headliner"
      @click.native="isScheduleOpened = !isScheduleOpened"
    />
    <transition name="fade">
      <div v-show="isScheduleOpened" class="track__talks-list">
        <Card
          v-for="(talk, index) in talks"
          :key="index"
          :data="talk"
          :is-left="isLeft"
          class="track__talk"
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
    isLeft: {
      type: Boolean,
      default: false,
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

.track {
  &:nth-child(3n + 1) {
    --accent-color: #FF0054;
    --bg-color: #FFBD00;
  }

  &:nth-child(3n + 2) {
    --accent-color:#FFBD00;
    --bg-color:#FF0054;
  }

  &:nth-child(3n + 3) {
    --accent-color:#FF0054;
    --bg-color:  #146DF2;
  }

  &__talks-list {
    margin: 0 -16px;
    padding: 0 16px 40px 16px;
    background-color: var(--bg-color,  #FFBD00);
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

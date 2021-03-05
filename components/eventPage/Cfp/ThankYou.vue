<template>
  <div class="ty-cfp">
    <Heading color="white">
      Thank you for your apply!
    </Heading>
    <p class="ty-cfp__text">
      Your experience is very important for every conference participant
    </p>
    <div class="ty-cfp__stripes-wrapper">
      <div class="ty-cfp__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        {{ eventTime }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="ty-cfp__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        {{ eventTime }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="ty-cfp__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        {{ eventTime }}
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="ty-cfp__icon"
        />
        Exploit Virtual Conference Platform
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Heading from '~/components/common/Heading';

export default {
  name: 'ThankYouCFP',
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {
    startTime() {
      return moment(this.event.start).format('HH:MM a');
    },
    endTime() {
      return moment(this.event.end).format('HH:MM a');
    },
    date() {
      return moment(this.event.end).format('MMM DD');
    },
    year() {
      return moment(this.event.end).format('YYYY');
    },
    eventTime() {
      return `${this.startTime} - ${this.endTime}, ${this.date}, ${this.year}`;
    },
  },
  methods: {},
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.ty-cfp {
  background-color: $black;
  width: 100%;
  height: 100vh;
  padding: 86px 16px 40px 16px;
  background-color: $black;
  position: relative;

  &__text {
    text-align: center;
  }

  &__stripe {
    width: 300%;
    min-width: max-content;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    line-height: 24px;
    color: $black;
    font-weight: bold;
    position: absolute;

    &:nth-child(1) {
      background-color: $accent-blue;
      transform: rotate(-10deg);
      bottom: 10%;
      left: -100%;
    }

    &:nth-child(2) {
      background-color: $accent-red;
      transform: rotate(-30deg);
      bottom: 30%;
      left: -55%;
    }

    &:nth-child(3) {
      background-color: $accent-yellow;
      transform: rotate(10deg);
      bottom: 35%;
      left: -155%;
    }
  }

  &__icon {
    margin-right: 18px;
    &:nth-child(2) {
      margin: 0 12px;
    }
  }

  @media (min-width: $media-xs) {
    &__stripe {
      &:nth-child(2) {
        left: -85%;
      }

      &:nth-child(3) {
        left: -125%;
      }
    }
  }

  @media (min-width: $media-sm) {
    padding: 148px 24px 84px 24px;

    &__text {
      text-align: left;
    }

    &__stripe {
      height: 88px;
      font-size: 24px;

      &:nth-child(1) {
        bottom: 7%;
      }

      &:nth-child(2) {
        bottom: 22%;
      }

      &:nth-child(3) {
        bottom: 27%;
        left: -120%;
      }
    }
  }

  @media (min-width: $media-md) {
    height: 100vh;
    padding-bottom: 102px;
    display: flex;
    flex-flow: column;

    &__stripe {
     &:nth-child(1) {
        bottom: 10%;
      }

      &:nth-child(2) {
        bottom: 17%;
        left: -100%;
      }

      &:nth-child(3) {
        bottom: 32%;
        left: -100%;
      }
    }
  }

  @media (min-width: $media-lg) {
    padding: 150px 20%;

    &__stripe {
     &:nth-child(1) {
        bottom: 20%;
      }

      &:nth-child(2) {
        bottom: -110px;
        transform-origin: bottom left;
        left: -88px;
        width: 150%;
      }
    }
  }
}
</style>

<template>
  <GenericSection class="join">
    <FormLayout class="join__form-wrapper">
      <template #info>
        <Heading color="white" class="form-layout__heading">
          Join to {{ event.name }}
        </Heading>
        <p class="form-layout__text">
          If you don't have the code you can 
          <router-link :to="`/${event.id}/checkout`" class="form-layout__link">
          buy</router-link> them now
        </p>
      </template>
      <template #form>
        <form @submit.prevent="joinEvent">
          <Input
            v-model="form.code.value"
            :error="form.code.error"
            :disabled="isLoading"
            name="ticket-code"
            label="Ticket Code"
            @input="form.code.error = ''"
          />
          <Button
            :is-loading="isLoading"
            class="form-layout__button"
          >
            join
          </Button>
        </form>
      </template>
    </FormLayout>
    <div class="join__stripes-wrapper">
      <div class="join__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="join__icon"
        />
        <span class="join__event-time">
          {{ eventTime }}
        </span>
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="join__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="join__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="join__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="join__icon"
        />
        <span class="join__event-time">
          {{ eventTime }}
        </span>
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="join__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="join__icon"
        />
        Exploit Virtual Conference Platform
      </div>
      <div class="join__stripe">
        <svg-icon
          name="calendar"
          width="20"
          height="20"
          fill="#0B0A14"
          class="join__icon"
        />
        <span class="join__event-time">
          {{ eventTime }}
        </span>
        <svg-icon
          name="arrow"
          width="26"
          height="18"
          fill="#0B0A14"
          class="join__icon"
        />
        <svg-icon
          name="location"
          width="18"
          height="26"
          fill="#0B0A14"
          class="join__icon"
        />
        Exploit Virtual Conference Platform
      </div>
    </div>
  </GenericSection>
</template>

<script>
import { mapActions } from 'vuex';
import moment from 'moment';
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'Join',
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    GenericSection,
    FormLayout,
    Heading,
    Input,
    Button,
  },
  data: () => ({
    form: {
      code: {
        value: '',
        error: '',
      },
    },
    isLoading: false,
  }),
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
  methods: {
    ...mapActions({
      'POST': 'crud/POST',
    }),
    joinEvent() {
      this.form.code.error = '';

      if (this.form.code.value) {
        this.isLoading = true;
        this.POST({
          route: `/ticketing/event/${this.$route.params.event}/code/${this.form.code.value.toLowerCase()}/validate`,
          data: { 'email': 'test@email.com' },
        })
        .then((data) => { console.log(data) })
        .catch((err) => {
          if (err.response.data.errors) this.form.code.error = 'Code has been used';
          else if (err.response.data) this.form.code.error = err.response.data.msg;
          else this.form.code.error = 'Code not valid';
        })
        .finally(() => { this.isLoading = false; });
      }
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.join {
  padding-top: 76px;
  padding-bottom: 0;
  min-height: 100vh;
  display: flex;
  flex-flow: column;

  &__form-wrapper {
    flex-grow: 0;
    position: relative;
    z-index: 3;
  }

  &__stripes-wrapper {
    min-height: 306px;
    flex-grow: 1;
    position: relative;
    z-index: 0;
  }

  &__event-time {
    text-transform: uppercase;
    margin-right: 18px;
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
      bottom: 30px;
      left: -100%;
    }

    &:nth-child(2) {
      background-color: $accent-red;
      transform: rotate(-30deg);
      bottom: 230px;
      left: -50%;
    }

    &:nth-child(3) {
      background-color: $accent-yellow;
      transform: rotate(10deg);
      bottom: 205px;
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
        bottom: 165px;
        left: -85%;
      }

      &:nth-child(3) {
        left: -125%;
      }
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 190px;

    &__stripes-wrapper {
      min-height: 490px;
    }

    &__stripe {
      height: 88px;
      font-size: 24px;

      &:nth-child(1) {
        bottom: 100px;
      }

      &:nth-child(2) {
        bottom: 215px;
        left: -100%;
      }

      &:nth-child(3) {
        bottom: 300px;
        left: -105%;
      }
    }
  }

  @media (min-width: $media-md) {
    padding-top: 120px;

    &__stripes-wrapper {
      min-height: 300px;
    }

    &__stripe {
     &:nth-child(1) {
        bottom: -70px;
      }

      &:nth-child(2) {
        bottom: 150px;
        left: -70%;
      }

      &:nth-child(3) {
        bottom: 140px;
        left: -100%;
      }
    }
  }

  @media (min-width: $media-lg) {
    padding-top: 200px;

    &__stripes-wrapper {
      min-height: 500px;
    }

    &__stripe {
     &:nth-child(1) {
        bottom: -15px;
      }

      &:nth-child(2) {
        bottom: 180px;
      }
    }
  }
}
</style>

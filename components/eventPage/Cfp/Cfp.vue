<template>
  <transition-group name="fade">
    <ThankYou
      v-if="isSent"
      key="cfp-ty"
      :event="event"
    />
    <GenericSection
      v-else
      key="cfp-forms"
      class="cfp"
    >
      <transition name="fade">
        <Speaker
          v-if="!isSpeakerFilled && !isTalkFilled"
          @go-to-talk="goToTalk"
        />
      </transition>
      <transition name="fade">
        <Talk
          v-if="isSpeakerFilled && !isTalkFilled"
          @go-to-contacts="goToContacts"
        />
      </transition>
      <transition name="fade">
        <Contacts
          v-if="isSpeakerFilled && isTalkFilled"
          :has-error="hasError"
          :is-loading="isLoading"
          @send-cfp="sendCfp"
        />
      </transition>
    </GenericSection>
  </transition-group>
</template>

<script>
import { mapActions } from 'vuex';
import GenericSection from '~/components/common/GenericSection';
import Speaker from './Speaker';
import Talk from './Talk';
import Contacts from './Contacts';
import ThankYou from './ThankYou';

export default {
  name: 'CfpForm',
  props: {
    event: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    GenericSection,
    Speaker,
    Talk,
    Contacts,
    ThankYou,
  },
  data: () => ({
    isSpeakerFilled: false,
    isTalkFilled: false,
    form: {},
    hasError: false,
    isSent: false,
    isLoading: false,
  }),
  computed: {},
  methods: {
    ...mapActions({
      post: 'crud/POST',
    }),
    goToTalk(data) {
      this.form = { ...this.form, ...data };
      this.isSpeakerFilled = true;
    },
    goToContacts(data) {
      this.form = { ...this.form, ...data };
      this.isTalkFilled =  true;
    },
    sendCfp(data) {
      this.form = { ...this.form, ...data };

      this.hasError = false;
      this.isLoading = true;
      this.post({
        route: `/public/event/${this.$route.params.event}/talk`,
        data: this.form,
      })
        .then(() => { this.isSent = true; })
        .catch(() => { this.hasError = false; })
        .finally(() => { this.isLoading = false; });
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.cfp {
  padding-top: 78px;
  padding-bottom: 24px;

  @media (min-width: $media-sm) {
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding-top: 222px;
    padding-bottom: 142px;
  }

  @media (min-width: $media-md) {
    padding-top: 140px;
    padding-bottom: 60px;
  }

  @media (min-width: $media-lg) {
    padding-top: 204px;
    padding-bottom: 124px;
  }
}
</style>
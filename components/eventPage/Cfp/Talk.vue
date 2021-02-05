<template>
  <FormLayout class="cfp-talk">
    <template #info>
      <Heading color="white" class="form-layout__heading">
        Talk Information
      </Heading>
      <p class="form-layout__text cfp-talk__text">
        If you have already participated in our conferences, you can
        <a
          :href="`${baseUrl}/manager/#/speaker`"
          target="_blank"
          class="form-layout__link"
        >apply</a> through the cabinet
      </p>
    </template>
    <template #form>
      <form class="cfp-talk__form" @submit.prevent="goToContacts">
        <Input
          v-model="form.title.value"
          name="title"
          :label="form.title.label"
          :error="form.title.error"
          @blur="validateField('title', form)"
          @input="clearError('title', form)"
        />
        <div class="cfp-talk__tracks">
          <div
            v-for="track in tracks"
            :key="track.value"
            class="cfp-talk__track"
            :class="{'selected': form.talk_type.value === track.value}"
            @click="selectTrack(track.value)"
          >
            <svg-icon
              :name="track.icon"
              width="20"
              height="16"
              fill=" #0B0A14"
              class="cfp-talk__icon"
            />
            {{track.displayValue}}
          </div>
          <div v-if="form.talk_type.error" class="cfp-talk__track-error">
            {{form.talk_type.error}}
          </div>
        </div>
        <Input
          v-model="form.description.value"
          name="description"
          :error="form.description.error"
          :label="form.description.label"
          :is-multiline="form.description.isMultiline"
          :rows="form.description.rows"
          @blur="validateField('description', form)"
          @input="clearError('description', form)"
        />
        <Button class="form-layout__button">
          next
        </Button>
      </form>
    </template>
  </FormLayout>
</template>

<script>
import { mapState } from 'vuex';
import { transformForm } from '~/assets/js/utils';
import { validateField, validateForm, clearError } from '~/assets/js/validation';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'CfpSpeaker',
  props: {},
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
  },
  data: () => ({
    form: {
      title: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Title',
      },
      description: {
        value: '',
        error: '',
        rules: ['required'],
        label: 'Description',
        isMultiline: true,
        rows: 4,
      },
      talk_type: {
        value: '',
        error: '',
        rules: ['required'],
      }
    },
    tracks: {
      build_it: {
        value: 'build_it',
        displayValue: 'Build it!',
        icon: 'build-it',
      },
      break_it: {
        value: 'break_it',
        displayValue: 'Break it!',
        icon: 'break-it',
      },
      show_it: {
        value: 'show_it',
        displayValue: 'Show it!',
        icon: 'show-it',
      },
    }
  }),
  computed: {
    ...mapState([
      'baseUrl',
    ])
  },
  methods: {
    validateField,
    validateForm,
    clearError,
    transformForm,
    selectTrack(track) {
      this.form.talk_type.value = track;

      this.validateField('talk_type', this.form);
    },
    goToContacts() {
      const isValid = this.validateForm(this.form);

      if(!isValid) return;

      const data = this.transformForm(this.form);
      this.$emit('go-to-contacts', data);
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.cfp-talk {
  &__tracks {
    margin-bottom: 24px;
    display: grid;
    grid-gap: 8px;
  }

  &__track {
    height: 64px;
    display: flex;
    align-items: center;
    margin-left: 48px;
    margin-right: -16px;
    color: $black;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1em;
    cursor: pointer;
    transition: background-color 0.3s;
    
    &:nth-child(3n + 1) {
      background-color: $accent-red;

      &.selected {
        background-color: mix($accent-red, $purple-black);
      }
    }

    &:nth-child(3n + 2) {
      background-color: $accent-yellow;

      &.selected {
        background-color: mix($accent-yellow, $purple-black);
      }
    }

    &:nth-child(3n + 3) {
      background-color: $accent-blue;

      &.selected {
        background-color: mix($accent-blue, $purple-black);
      }
    }
  }

  &__icon {
    margin-left: 48px;
    margin-right: 24px;
  }

  &__track-error {
    margin-left: 48px;
    font-size: 14px;
    line-height: 1.2;
    color: $error-red;
  }

  @media (min-width: $media-sm) {
    &__text {
      padding-right: 42px;
    }

    .form-layout__form-wrapper {
      min-width: 284px;
    }

    &__form {
      margin-left: -32px;
    }

    &__tracks {
      grid-gap: 12px;
    }

    &__track {
      margin-right: -24px;
    }
  }

  @media (min-width: $media-md) {
    &__form {
      margin-left: 0;
    }

    &__text {
      padding-right: 0;
    }

    &__tracks {
      grid-gap: 16px;
    }
  }

  @media (min-width: $media-lg) {
    &__form {
      margin-left: -32px;
    }

    &__track {
      margin-right: -20vw;
      height: 72px;
    }
  }
}
</style>

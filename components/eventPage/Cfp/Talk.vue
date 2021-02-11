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
          v-model="fields.title"
          name="title"
          label="Title"
        />
        <div class="cfp-talk__tracks">
          <div class="cfp-talk__track">
            <svg-icon
              name="build-it"
              width="20"
              height="16"
              fill=" #0B0A14"
              class="cfp-talk__icon"
            />
            Build it!
          </div>
          <div class="cfp-talk__track">
            <svg-icon
              name="break-it"
              width="20"
              height="16"
              fill=" #0B0A14"
              class="cfp-talk__icon"
            />
            Break it!
          </div>
          <div class="cfp-talk__track">
            <svg-icon
              name="show-it"
              width="20"
              height="16"
              fill=" #0B0A14"
              class="cfp-talk__icon"
            />
            Show it!
          </div>
        </div>
        <Input
          v-model="fields.description"
          name="description"
          label="Description"
          is-multiline
          :rows="4"
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
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';
import Input from '~/components/common/Input';
import Button from '~/components/common/Button';

export default {
  name: 'CfpSpeaker',
  props: {
    fields: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    FormLayout,
    Heading,
    Input,
    Button,
  },
  data: () => ({}),
  computed: {
    ...mapState([
      'baseUrl',
    ])
  },
  methods: {
    goToContacts() {},
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
    
    &:nth-child(1) {
      background-color: $accent-red;

      &.selected {
        background-color: mix($accent-red, $purple-black);
      }
    }

    &:nth-child(2) {
      background-color: $accent-yellow;

      &.selected {
        background-color: mix($accent-yellow, $purple-black);
      }
    }

    &:nth-child(3) {
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

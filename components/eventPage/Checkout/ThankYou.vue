<template>
  <GenericSection class="tnks-page">
    <FormLayout>
      <template #info>
        <Heading color="white" class="form-layout__heading tnks-page__heading">
          Your tickets for {{eventName}}
        </Heading>
      </template>
      <template #form>
        <div
          v-for="code in codes"
          :key="code.type"
          class="tnks-page__codes"
        >
          <Heading type="h3" color="white" class="tnks-page__ticket-type">
            {{capitalizeFirstLetter(code.type)}} tickets
          </Heading>
          <div class="tnks-page__codes-wrapper">
            <span
              v-for="code in code.codes"
              :key="code"
              class="tnks-page__code"
            >
              {{ code }}
            </span>
          </div>
        </div>
      </template>
    </FormLayout>
  </GenericSection>
</template>

<script>
import { capitalizeFirstLetter } from '~/assets/js/utils';
import GenericSection from '~/components/common/GenericSection';
import FormLayout from '~/components/common/FormLayout';
import Heading from '~/components/common/Heading';

export default {
  name: 'ThankYouPage',
  props: {
    eventName: {
      type: String,
      default: '',
    },
    codes: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    GenericSection,
    FormLayout,
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {
    capitalizeFirstLetter,
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.tnks-page {
  padding-top: 77px;
  padding-bottom: 32px;

  &__heading {
    margin-bottom: 24px;
  }

  &__codes {
    padding-top: 36px;
    padding-bottom: 64px;
    border-bottom: 1px solid $white;

    &:first-child {
      border-top: 4px solid $white;
    }
  }

  &__ticket-type {
    margin-bottom: 8px;
  }

  &__code {
    &::after {
      content: ',';
      display: inline-block;
      margin-left: -4px;
    }

    margin-right: 4px;

    &:last-child {
      &::after {
        content: '';
      }

      margin-right: 0;
    }
  }

  @media (min-width: $media-xs) {
    &__codes-wrapper {
      width: 65%;
    }
  }

  @media (min-width: $media-sm) {
    padding-top: 206px;
    padding-bottom: 166px;
    min-height: 100vh;
    display: flex;
    align-items: center;
    
    &__codes-wrapper {
      width: unset;
    }
  }

  @media (min-width: $media-md) {
    padding-top: 156px;
    padding-bottom: 76px;
  }
}
</style>
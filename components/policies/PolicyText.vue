<template>
  <main class="policy-text">
    <section
      v-for="(section, name) in data"
      :key="name"
      class="policy-text__section"
    >
      <template v-for="(elem, name) in section">
        <Heading
          :key="name"
          v-if="checkName(name, 'heading1')"
          type="h3"
          class="policy-text__heading1"
        >
          {{ elem }}
        </Heading>
        <Heading
          :key="name"
          v-if="checkName(name, 'heading2')"
          type="h4"
          class="policy-text__heading2"
        >
          {{ elem }}
        </Heading>
        <template v-if="checkName(name, 'paragraph')">
          <p
            v-for="item in elem"
            :key="item"
            class="policy-text__paragraph"
          >
            {{ item }}
          </p>
        </template>
        <p
          :key="name"
          v-if="checkName(name, 'headline')"
          class="policy-text__headline"
        >
          {{ elem }}
        </p>
        <p
          :key="name"
          v-if="checkName(name, 'definition')"
          class="policy-text__prelist"
        >
          {{ elem }}
        </p>
        <ul
          :key="name"
          v-if="checkName(name, 'list')"
          class="policy-text__list"
        >
          <li
            v-for="item in elem"
            :key="item"
            class="policy-text__list-item"
          >
            <template v-if="item.tag && item.text">
              <span class="policy-text__tag">
                {{ item.tag }}
              </span>
              <span class="policy-text__explanation">
                {{ item.text }}
              </span>
            </template>
            <template v-else>
              {{ item }}
            </template>
          </li>
        </ul>
        <p
          :key="name"
          v-if="checkName(name)"
          class="policy-text__contacts"
        >
          <span>
            {{ elem.item }}
          </span>
          <span>
            {{ elem.description }}
          </span>
        </p>
      </template>
    </section>
  </main>
</template>

<script>
import Heading from '~/components/common/Heading';

export default {
  name: 'PolicyText',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Heading,
  },
  data: () => ({}),
  computed: {},
  methods: {
    checkName(name, elem) {
      if (elem) {
        return !Number.isInteger(name) && name.includes(elem);
      } else {
        return Number.isInteger(name);
      }
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.policy-text {
  padding: 38px 16px;
  text-align: justify;

  &__section {
    margin-bottom: 38px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__heading1,
  &__heading2,
  &__paragraph,
  &__list,
  &__headline {
    margin-bottom: 18px;
  }

  &__headline {
    font-weight: bold;
    color: $black;
  }

  &__list {
    padding-left: 20px;
  }

  &__list-item {
    list-style-type: disc;

    &::marker {
      color: $black;
    }
  }

  &__tag {
    font-weight: bold;
    color: $black;
  }

  @media (min-width: $media-sm) {
    padding: 64px 12%;

    &__section {
      margin-bottom: 64px;
    }
  }

  @media (min-width: $media-lg) {
    padding: 64px 20%;
  }

  @media (min-width: $media-xl) {
    padding: 64px 25%;
  }
}
</style>
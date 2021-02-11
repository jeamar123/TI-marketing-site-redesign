<template>
  <div
    ref="inputContainerRef"
    :class="[
      'input',
      {
        'input--error': error,
        'input--non-empty': !isInputEmpty,
      },
    ]"
  >
    <div class="input__wrapper">
      <component
        :is="isMultiline ? 'textarea' : 'input'"
        :value.prop="value"
        :type="type"
        :id="name"
        :rows="isMultiline ? rows : ''"
        :placeholder="label"
        ref="inputRef"
        class="input__control"
        @input="$emit('input', $event.target.value)"
        @blur="$emit('blur', $event)"
      />
      <label :for="name" class="input__label">
        {{ label }}
      </label>
    </div>
    <transition name="slide-error">
      <div v-if="error" class="input__error">
        {{ error }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CInput',

  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    isMultiline: {
      type: Boolean,
      default: false,
    },
    rows: {
      type: Number,
      default: 2,
    },
    error: {
      type: String,
      default: '',
    },
  },
  computed: {
    isInputEmpty() {
      return !this.value.length;
    },
  },
};
</script>

<style lang="scss">
@import '~/assets/scss/variables';

.input {
  $self: &;

  width: 100%;
  padding-bottom: 24px;
  position: relative;

  &__wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  &__control {
    min-height: 56px;
    min-width: 100px;
    width: 100%;
    padding: 12px 30px;
    background-color: $black;
    border: 1px solid $white;
    color: #fff;
    font-family: inherit;
    font-size: 16px;
    line-height: 22px;
    resize: none;

    &:focus {
      outline: none;

      &::placeholder {
        color: transparent;
        transition: color 0.2s;
      }
    }

    &::placeholder {
      color: $purple-gray;
    }
  }

  &__error {
    padding-top: 2px;
    font-size: 14px;
    line-height: 1.2;
    color: $error-red;
    text-align: left;
  }

  &__label {
    position: absolute;
    left: 25px;
    font-size: 16px;
    line-height: 1.5;
    padding: 0 5px;
    opacity: 0;
    top: 7px;
    color: $white;
    background-color: $black;
    transition: top 0.2s, opacity 0.2s, background-color 0.2s;
  }

  &--error {
    #{$self}__label {
      top: -11px;
      opacity: 1;
      color: $error-red;
    }

    #{$self}__control {
      border-color: $error-red;
      box-shadow: 0 0 2px 0 $error-red;
    }
  }

  &--non-empty #{$self}__label,
  &__control:focus ~ #{$self}__label {
    top: -11px;
    opacity: 1;
    transition: top 0.2s 0.1s, opacity 0.3s, background-color 0.2s 0.1s;
  }
}
</style>

<script>
export default {
  data() {
    return {
      showPassword: false,
      localValue: ''
    }
  },
  computed: {
    buttonLabel() {
      return (this.showPassword) ? "Hide" : "Show";
    }
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
    emitInput() {
      this.$emit('update:modelValue', this.localValue);
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  },
  watch: {
    modelValue(newValue) {
      this.localValue = newValue;
    }
  }
}
</script>

<template>
  <div v-if="label === 'Mot de passe'" class="mb-3">
    <label class="form-label">{{ label }}</label>
    <div class="input-group input-group-flat">
      <input v-if="showPassword" type="text" name="text" class="form-control" :placeholder="placeholder" v-model="localValue" @input="emitInput">
      <input v-else type="password" name="password" class="form-control" :placeholder="placeholder" v-model="localValue" @input="emitInput">
      <span class="input-group-text">
        <button @click="toggleShow" class="button" title="Show password" type="button"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
          <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye-off" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" /><path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" /><path d="M3 3l18 18" /></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
        </button>
      </span>
    </div>
  </div>
  <div v-else class="mb-3">
    <label class="form-label">{{ label }}</label>
    <input class="form-control" :placeholder="placeholder" :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           v-bind="$attr"
    >
  </div>
</template>

<style scoped>
.button {
  padding: 0;
  border: none;
  background: none;
}
</style>

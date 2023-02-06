<template>
  <div class="relative">
    <div :class="lableClass">
      <input :type="props.type" :class="inputClass" v-model.trim="proxy" :name="props.name" :id="props.id" :disabled="props.disabled" @click="toggleShowSelectHandler" />
      <label :class="titleClass" :for="props.id">
        {{ props.title }}
      </label>
    </div>
    <p v-if="props.error" class="text-red-400">{{ props.title }}{{ props.errorText }}</p>

    <ul v-if="isShowSelect && filterSelect.length > 0" class="select">
      <li class="select-item" v-for="(item, index) in filterSelect" :key="index" @click="selectDataHandler(item)">
        {{ item }}
      </li>
    </ul>
    <img v-if="props.select.length > 0 && proxy.length > 0" src="../assets/icons/cancel.png" alt="close" class="select-close" @click="clearInputHandler" />
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const emit = defineEmits()
const props = defineProps({
  select: {
    type: Array,
    default: []
  },
  title: {
    type: String
  },
  type: {
    type: String,
    default: 'text'
  },
  error: {
    type: Boolean,
    default: false
  },
  errorText: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [Number, String, Boolean]
  },
  name: {
    type: String
  },
  id: {
    type: String
  },
  disabled: {
    type: Boolean
  },
  value: {
    type: String
  }
})

const type = props.type

const proxy = ref(props.modelValue || props.value || '')
const isShowSelect = ref(false)

const filterSelect = computed(() => {
  return props.select.filter(item => item.includes(proxy.value))
})

const selectDataHandler = item => {
  proxy.value = item
  isShowSelect.value = false
}

const toggleShowSelectHandler = () => {
  isShowSelect.value = !isShowSelect.value
}

const clearInputHandler = () => {
  proxy.value = ''
}

const lableClass = computed(() => {
  if (['text', 'password', 'email'].includes(type)) {
    return 'lable-text'
  }
  if (type === 'checkbox') {
    return 'lable-checkbox'
  }
  return ''
})

const inputClass = computed(() => {
  if (['text', 'password', 'email'].includes(type) & props.error) {
    return ['input-text', 'input-text-error']
  }
  if (['text', 'password', 'email'].includes(type)) {
    return 'input-text'
  }
  if (type === 'checkbox') {
    return 'input-checkbox'
  }
  return ''
})

const titleClass = computed(() => {
  if (['text', 'password', 'email'].includes(type) && proxy.value) {
    return ['input-text-title-active', 'input-text-title']
  }
  if (['text', 'password', 'email'].includes(type)) {
    return 'input-text-title'
  }
  if (type === 'checkbox') {
    return 'input-checkbox-title'
  }
  return ''
})

watch(proxy, value => {
  emit('update:modelValue', value)
})

watch(props, value => {
  if (value.modelValue !== false && value.modelValue !== proxy.value) {
    proxy.value = value.modelValue
  }
  if (value.value && value.value !== proxy.value) {
    proxy.value = value.value
  }
})
</script>

<style scoped>
.lable-text {
  position: relative;
  border: 1px solid rgb(17, 24, 39);
  border-radius: 0.375rem;
}
.input-text {
  width: 100%;
  border: none;
  border-radius: 0.375rem;
  --tw-bg-opacity: 1;
  background-color: white;
}
.input-text-title {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.5rem;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-duration: 200ms;
  font-size: 0.8rem;
  line-height: 0.8rem;
  padding-left: 10px;
  color: #64748b;
}

.input-text:focus + .input-text-title {
  top: -1rem;
  left: 0;
  color: #f196a7;
  background: white;
  font-size: 1rem;
  line-height: 1.75rem;
}
.input-text-title-active {
  /* top: -1rem;
  left: 0;
  color: #4484a5;
  font-size: 1.125rem;
  line-height: 1.75rem; */
  display: none;
}
.input-text:focus {
  border-color: #4484a5;
}
.input-text-error {
  border-color: #ef4444;
}
/* .input-checkbox {
} */
.select {
  border-top-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  position: absolute;
  background-color: white;
  z-index: 1;
  max-height: 150px;
  overflow: auto;
  width: 100%;
}

.select-item {
  border-bottom-width: 2px;
  padding: 0.5rem 1rem;
}
.select-close {
  position: absolute;
  top: -30px;
  right: 0.5rem;
  width: 0.8rem;
}

.lable-checkbox {
  display: flex;
  margin-top: 1.5rem;
  align-items: center;
}
.input-checkbox-title {
  order: -1;
  margin-right: 0.75rem;
}
</style>

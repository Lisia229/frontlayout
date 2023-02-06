<template>
  <div
    @dragenter.prevent="toggleAcitveHandler"
    @dragleave.prevent="toggleAcitveHandler"
    @dragover.prevent
    @drop.prevent="toggleAcitveHandler"
    @click="errorTextValue = ''"
    :class="{ 'image-box': props.className !== 'avatar' }">
    <p v-if="!previewUrl" :class="{ 'image-title': props.className !== 'avatar' }">
      {{ props.title }}
    </p>
    <label :for="props.id">
      <img v-if="previewUrl" :src="previewUrl" :class="imageClass" />
      <div v-else class="image"></div>
    </label>
    <input type="file" :id="props.id" class="drop-file-input" accept="image/jpg, image/jpeg, image/png" @change="slectedFileHandler" />
    <p v-if="props.error || errorTextValue" class="text-red-400" :class="{ 'text-center': props.className === 'avatar' }">{{ props.title }}{{ errorTextValue }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const emit = defineEmits()
const props = defineProps({
  className: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Object],
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  error: {
    type: Boolean,
    default: false
  },
  errorText: {
    type: String,
    default: ''
  },
  id: {
    type: String
  }
})

const file = ref('')
const previewUrl = ref(props.modelValue)
const errorTextValue = ref(props.errorText || '')

const imageClass = computed(() => {
  if (props.className === 'avatar') {
    return 'avatar-img'
  }
  return 'image'
})

const toggleAcitveHandler = event => {
  errorTextValue.value = ''
  const uploadFile = event.dataTransfer.files[0]
  if (imageValidatorHandler(uploadFile)) return
  file.value = uploadFile
  previewUrlHandler()
}

const slectedFileHandler = event => {
  errorTextValue.value = ''
  const uploadFile = event.target.files[0]
  if (imageValidatorHandler(uploadFile)) return
  file.value = uploadFile
  previewUrlHandler()
}

const previewUrlHandler = () => {
  if (file.value && file.value.type.startsWith('image/')) {
    let reader = new FileReader()
    reader.addEventListener('load', event => {
      previewUrl.value = event.target.result
    })
    reader.readAsDataURL(file.value)
  }
}

const imageValidatorHandler = uploadFile => {
  if (!!uploadFile && !(uploadFile.type === 'image/jpg' || uploadFile.type === 'image/jpeg' || uploadFile.type === 'image/png')) {
    errorTextValue.value = '格式錯誤'
    return true
  }
  if (!!uploadFile && Math.floor(uploadFile.size / 1000000) > 1) {
    errorTextValue.value = '檔案過大'
    return true
  }
  return false
}


watch(file, value => {
  emit('update:modelValue', value)
})

watch(props, value => {
  if (value.modelValue !== file.value) {
    file.value = value.modelValue
  }
  if (value.modelValue === '') {
    previewUrl.value = ''
    previewUrlHandler()
  }
})
</script>

<style scoped>
input {
  display: none;
}

.avatar-img {
  width: 13rem;
  height: 13rem;
  object-fit: cover;
  border-radius: 50%;
  border-style: dashed;
  border-width: 2px;
  background-color: #64748b;
}

.image-box {
  width: 350px;
  padding-top: 0.5rem;
  position: relative;
}

.image {
  width: 100%;
  height: 13rem;
  border-style: dashed;
  border-width: 2px;
  object-fit: cover;
  border-radius: 0.5rem;
}

.image-title {
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
}
</style>

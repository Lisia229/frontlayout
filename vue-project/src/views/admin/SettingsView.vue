<template>
  <div id="settings-front">

  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/users'
import { useRoute } from 'vue-router'

const user = useUserStore()
const { account, email } = storeToRefs(user)
</script>

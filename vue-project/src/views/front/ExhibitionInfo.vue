<template>
  <div id="exhibitionInfo">
    <section>
      <div class="px-4 flex-column justify-center items-center">
        <div class="text-center">
          <p class="text-2xl pb-4 lg:text-4xl lg:pt-3 lg:pb-8">
            {{ exhibitioninfo.name }}
          </p>
        </div>
        <div>
          <img class="w-full lg:w-2/3 mx-auto" :src="exhibitioninfo.image" />
        </div>
        <hr class="h-px my-8 bg-gray-500 border-0 dark:bg-gray-700" />
        <div class="lg:flex lg:text-left text-center lg:justify-center lg:items-start">
          <div class="lg:pr-16">
            <div class="text-xl pb-4">日期：{{ exhibitioninfo.dateValue }}</div>
            <div class="text-xl pb-4">地點：{{ exhibitioninfo.place }}</div>
            <div class="text-xl pb-4">門票：{{ exhibitioninfo.price }}</div>
          </div>
          <div class="lg:pl-16 lg:w-1/2 whitespace-pre-wrap lg:text-xl">{{ exhibitioninfo.description }}</div>
        </div>
      </div>
    </section>
    <!-- <section>
      <div class="px-8 py-16 mt-4 relative">
        <h1 class="text-2xl lg:text-6xl">EXHIBITION</h1>
        <p>其他活動</p>
        <button
          class="hidden lg:block absolute right-6 top-32 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          SEE ALL
        </button>
      </div>
    </section> -->
  </div>
</template>
<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'
import ExhibitionSmallCard from '../../components/SmallCard.vue'

const route = useRoute()

const exhibitioninfo = reactive({
  name: '',
  image: '',
  description: '',
  dateValue: '',
  place: '',
  price: ''
})

;(async () => {
  try {
    const { data } = await api.get('/exhibitions/' + route.params.id)
    exhibitioninfo.name = data.result.name
    exhibitioninfo.image = data.result.image
    exhibitioninfo.description = data.result.description
    exhibitioninfo.dateValue = data.result.dateValue
    exhibitioninfo.place = data.result.place
    exhibitioninfo.price = data.result.price
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>

<template>
  <div id="frontHome" class="px-10">
    <section id="section01" class="bg-whiteF dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">AZ.ゼロ</h1>
          <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            ✦ 尋找下一顆星星 ✦
            <br />
            為台灣其他城市的文創發展創造經驗。
            <br />
            讓各式各樣的創意在這裡切磋較量，
            <br />
            在切磋較量中滙成文化。
            <br />
            讓文創活動的價值，在愉悅的消費體驗中傳遞發散。
          </p>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img id="homeBigImg" src="./image/36bc97eaa99c60d4b9089f10176a59f0.jpg" />
        </div>
      </div>
    </section>
    <section id="section02" class="bg-whiteF dark:bg-gray-900">
      <hr class="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700" />
      <div class="row-auto items-center justify-between align-middle flex max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:cols-12">
        <div class="col">
          <p class="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">OUR PARTNER</p>
        </div>
        <div class="col">
          <div class="line w-0.5 h-24 bg-gray-500"></div>
        </div>
        <div class="col">
          <img src="./image/bpa-free.png" alt="" />
        </div>
        <div class="col">
          <img src="./image/cruelty-free-2.png" alt="" />
        </div>
        <div class="col">
          <img src="./image/cruelty-free.png" alt="" />
        </div>
        <div class="col">
          <img src="./image/gluten-free.png" alt="" />
        </div>
        <div class="col">
          <img src="./image/no-sulfate.png" alt="" />
        </div>
        <div class="col">
          <img src="./image/paraben-free.png" alt="" />
        </div>
      </div>
    </section>
    <section id="section03" class="bg-whiteF dark:bg-gray-900">
      <hr class="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700" />
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto md:grid-cols-12 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <!-- -exhibition button -->
        <div class="w-full h-full mr-auto md:col-span-6 md:border-r-2 md:border-black place-self-start lg:col-span-4">
          <h1 class="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">E x h i b i t i o n</h1>
          <p class="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">近期活動</p>
          <a
            href="/exhibition"
            class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-black rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            SEE ALL exhibition
            <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </a>
        </div>
        <!-- -exhibition show -->
        <div class="hidden md:flex md:col-span-6 items-center mx-auto lg:mt-0 lg:col-span-8 lg:grid">
          <div class="flex-column items-center justify-center align-middle max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4">
            <div class="col">
              <div v-for="(exhibition_big, index) in exhibition_bigs" :key="exhibition_big._id">
                <ExhibitionCard @click="info(exhibition_big._id)" v-bind="exhibition_big"></ExhibitionCard>
              </div>
            </div>
            <div class="col grid lg:grid-cols-2">
              <div v-for="(exhibition, index) in exhibitions" :key="exhibition._id">
                <ExhibitionSmallCard @click="info(exhibition._id)" v-bind="exhibition"></ExhibitionSmallCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section04" class="bg-whiteF dark:bg-gray-900">
      <hr class="h-px my-4 bg-gray-500 border-0 dark:bg-gray-700" />
      <div class="gap-8 justify-center items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden" src="../../assets/image/01.jpg" alt="image" />
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-normal font-extrabold text-gray-900 dark:text-white">Let's join us and create more ideas that brings us together.</h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            我們也相當鼓勵自行創業的青年進駐來我們園區，在場創業青年就像是臺灣的國手，你們的創意、科技實力，一定會為AZゼロ帶來翻轉的力量，而我們也一定會以更開放的態度，和所有有心創業的青年一起打拚，共同帶領ゼロ走向創新的宏觀方向與格局，ゼロ的未來，將因為有大家的智慧和努力而更加精采。
          </p>         
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { reactive, computed } from 'vue'
import { api } from '@/plugins/axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import ExhibitionCard from '../../components/BigCard.vue'
import ExhibitionSmallCard from '../../components/SmallCard.vue'

const router = useRouter()

const exhibitions = reactive([])
const exhibition_bigs = reactive([])

;(async () => {
  try {
    const { data } = await api.get('/exhibitions')
    exhibitions.push(...data.result.splice(1, 4))
    exhibition_bigs.push(...data.result.splice(0, 1))
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()

const info = id => {
  router.push(`exhibition/${id}`)
}
</script>

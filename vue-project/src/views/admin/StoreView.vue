<template>
  <div id="admin-stories">
    <button
      type="button"
      class="text-white bg-blueB hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      data-modal-target="addstories"
      data-modal-toggle="addstories">
      新增合作店家
    </button>

    <section
      id="addstories"
      tabindex="-1"
      aria-hidden="true"
      data-modal-backdrop="static"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div id="storeform" class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            @click="cancel(form)"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-hide="addstories">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="px-6 py-4 lg:px-8">
            <h2 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add a new Store</h2>

            <form @submit.prevent="submit" class="space-y-6">
              <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Store's Name</label>
                  <input
                    v-model="form.name"
                    type="text"
                    name="name"
                    id="name"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Store's name" />
                </div>
                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">place</label>
                  <input
                    v-model="form.place"
                    type="text"
                    name="place"
                    id="place"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Store's place" />
                </div>

                <div class="w-full">
                  <label for="place" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">time</label>
                  <input
                    v-model="form.dateValue"
                    type="text"
                    name="dateValue"
                    id="dateValue"
                    placeholder="10:00 - 16:00"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>

                <div class="sm:col-span-2">
                  <label for="url" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">url</label>
                  <input
                    v-model="form.url"
                    type="text"
                    name="url"
                    id="url"
                    placeholder="粉絲專頁"
                    class="bg-white border border-vtd-secondary-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>
                <!-- -Description -->
                <div class="sm:col-span-2">
                  <label for="special" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">special</label>
                  <textarea
                    v-model="form.special"
                    id="special"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your special here"></textarea>
                </div>
                <!-- -Description -->
                <div class="sm:col-span-2">
                  <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                  <textarea
                    v-model="form.description"
                    id="description"
                    rows="8"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-vtd-secondary-300focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Your description here"></textarea>
                </div>
                <div class="sm:col-span-2">
                  <label for="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">upload image</label>
                  <div class="flex items-center justify-center w-full">
                    <label
                      for="dropzone-file"
                      class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-white dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadImage v-model="form.image" id="dropzone-file" />
                        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span class="font-semibold">Click to upload</span>
                          or drag and drop
                        </p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex justify-center align-middle">
                <div class="col">
                  <button
                    type="button"
                    data-modal-hide="addstories"
                    @click="cancel(form)"
                    class="inline-flex border shadow bg-red-800 text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    cancel
                  </button>
                  <button
                    type="submit"
                    data-modal-hide="addstories"
                    class="inline-flex border shadow bg-green-800 text-white items-center mx-3 px-7 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div id="stories-list" class="grid mb-8 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
      <div
        id="card"
        v-for="(store, idx) in stories"
        :key="store._id"
        class="flex flex-col items-center justify-center p-8 text-center bg-whiteF rounded-t-lg md:rounded-t-none md:rounded-tl-lg dark:bg-gray-800 dark:border-gray-700">
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg w-96 h-60" :src="store.image" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{{ store.name }}</h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ store.dateValue }}
            </p>
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blueB rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              @click="editBtn(store)">
              編輯
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive, onMounted } from 'vue'
import Swal from 'sweetalert2'
import UploadImage from '../../components/UploadImage.vue'
import { Modal } from 'flowbite'

const stories = reactive([])

let modal = null

onMounted(() => {
  modal = new Modal(document.getElementById('addstories'))
})

// 抓取表單物件
const form = reactive({
  _id: '',
  name: '',
  place: '',
  dateValue: '',
  description: '',
  image: undefined,
  url: '',
  special:'',
  valid: false
})

// !編輯商品
const editBtn = data => {
  console.log(data)
  form._id = data._id
  form.name = data.name
  form.place = data.place
  form.dateValue = data.dateValue
  form.description = data.description
  form.image = data.image
  form.url = data.url
  form.special = data.special
  form.valid = data.valid
  modal.show()
}

// -取消
const cancel = () => {
  form._id = ''
  form.name = ''
  form.place = ''
  form.special = ''
  form.dateValue = ''
  form.description = ''
  form.image = ''
  form.url = ''
  form.valid = false
  form.idx = -1
  modal.hide()
}

const submit = async () => {
  // fd.append(key, value)
  const fd = new FormData()
  fd.append('name', form.name)
  fd.append('url', form.url)
  fd.append('dateValue', form.dateValue)
  fd.append('place', form.place)
  fd.append('description', form.description)
  fd.append('image', form.image)
  fd.append('special', form.special)

  try {
    if (form._id.length === 0) {
      const { data } = await apiAuth.post('/stories', fd)
      stories.push(data.result)
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '新增成功'
      })
    } else {
      const { data } = await apiAuth.patch('/stories/' + form._id, fd)
      stories[form.idx] = data.result
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '編輯成功'
      })
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }

  // -送出後清空
  form._id = ''
  form.name = ''
  form.place = ''
  form.url = ''
  form.dateValue = ''
  form.description = ''
  form.image = ''
  form.special = ''
  form.valid = false
  form.idx = -1

  modal.hide()
}

;(async () => {
  try {
    const { data } = await apiAuth.get('/stories/all')
    stories.push(...data.result)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
})()
</script>

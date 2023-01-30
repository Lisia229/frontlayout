<template>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div id="register">
      <div class="row">
        <div class="col">
          <h1>登入</h1>
        </div>
        <form @submit.prevent="login">
          <div class="col">
            <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">account</label>
            <div class="flex">
              <input
                v-model="form.account"
                type="text"
                id="website-admin"
                class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="elonmusk" />
            </div>
            <div class="mb-6">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
              <input
                v-model="form.password"
                type="password"
                id="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="•••••••••"
                required />
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useUserStore } from '@/stores/users'
import Swal from 'sweetalert2'

const user = useUserStore()

const form = reactive({
  account: '',
  password: ''
})
const login = async () => {
  console.log(login)
  await user.login(form)
}
</script>

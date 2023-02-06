<template>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div id="login">
      <div class="row">
        <div class="col">
          <div class="w-full max-w-sm p-4 bg-whiteF rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <form class="space-y-6" action="#" @submit.prevent="login">
              <h1 class="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl dark:text-white">Sign in to our website</h1>
              <div>
                <label for="account" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>Your account</label>
                <input
                  v-model="form.account"
                  type="text"
                  name="account"
                  id="account"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="xxxx"
                  required />
              </div>
              <div>
                <label for="password" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white"><svg
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                  </svg>Your password</label>
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required />
              </div>
              <div class="flex items-start">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      type="checkbox"
                      value=""
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required />
                  </div>
                  <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blueB hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Login to your account
              </button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered?
                <a href="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
            </form>
          </div>
        </div>
        
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

<template>
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <div id="register" class="relative">
      <div class="row">
        <div class="col">
          <div class="w-full max-w-sm p-4 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <form @submit.prevent="registerHandler" class="space-y-4 md:space-y-6" @click="validatorError">
              <h1 class="text-xl font-bold leading-tight tracking-normal text-gray-900 md:text-2xl dark:text-white">Create and account</h1>
              <div>
                <label for="email" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  Your Email
                </label>
                <input
                  v-model="form.email"
                  type="text"
                  name="email"
                  id="email"
                  class="appearance-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@google.com"
                  required=""
                  @change="error.email.error = false" />
                <p v-if="error.email.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
                  <span class="font-medium">Email is invalid</span>
                </p>
              </div>
              <div>
                <label for="account" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <svg
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
                  </svg>
                  Your account
                </label>
                <input
                  v-model="form.account"
                  type="text"
                  name="account"
                  id="account"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="account ID"
                  required=""
                  @change="error.account.error = false" />
                <p v-if="error.account.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
                  <span class="font-medium">Oh, snapp!</span>
                  &nbsp; required field. At least 3 words.
                </p>
              </div>
              <div>
                <label for="password" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <svg
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
                  </svg>
                  Password
                </label>
                <input
                  v-model="form.password"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  @change="error.password.error = false" />
                <p v-if="error.password.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
                  <span class="font-medium">Oh, snapp!</span>
                  &nbsp; required field. At least 4 words.
                </p>
              </div>
              <div>
                <label for="confirm-password" class="flex mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  <svg
                    class="w-5 h-5 mr-1 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"></path>
                  </svg>
                  Confirm password
                </label>
                <input
                  v-model="form.passwordConfirm"
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  @change="error.passwordConfirm.error = false" />
                <p v-if="error.passwordConfirm.error" class="mt-2 text-xs text-red-600 dark:text-red-400">
                  <span class="font-medium">password is not the same</span>
                </p>
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required="" />
                </div>
                <div class="ml-3 text-sm">
                  <label for="terms" class="font-light text-gray-500 dark:text-gray-300">
                    I accept the
                    <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                class="w-full text-white bg-blueB hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create an account
              </button>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                <a href="/login" class="text-blue-700 hover:underline dark:text-blue-500">Login here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
    <img src="../../assets/icons/img-footer.png" class="hidden lg:block absolute pt-20 button-0 right-5 -z-10">
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'
import validator from 'validator'

const router = useRouter()

const error = reactive({
  account: {
    error: false
  },
  password: {
    error: false
  },
  email: {
    error: false
  },
  passwordConfirm: {
    error: false
  }
})

const form = reactive({
  account: '',
  password: '',
  passwordConfirm: '',
  email: ''
})

const validatorError = () => {
  if (!validator.isEmail(form.email)) {
    error.email.error = true
    return true
  }
  if (validator.isEmpty(form.account)) {
    error.account.error = true
    return true
  }
  if (!validator.isByteLength(form.account, { min: 3, max: 20 })) {
    error.account.error = true
    return true
  }
  if (validator.isEmpty(form.password)) {
    error.password.error = true
    return true
  }
  if (!validator.isByteLength(form.password, { min: 4, max: 20 })) {
    error.password.error = true
    return true
  }
  if (form.passwordConfirm !== form.password) {
    error.passwordConfirm.error = true
    return true
  }

  return false
}

const registerHandler = async () => {
  if (validatorError()) return
  try {
    await api.post('/users', form)
    Swal.fire({
      icon: 'success',
      title: '成功',
      text: '註冊成功'
    })
    router.push('/')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: error?.response?.data?.message || '發生錯誤'
    })
  }
}

// const registerHandler = async () => {
//   try {
//     if (validatorError()) return
//     await api.post('/users', form)
//     await Swal.fire({
//       icon: 'success',
//       title: '成功',
//       text: '註冊成功'
//     })
//     router.push('/')
//   } catch (error) {
//     Swal.fire({
//       icon: 'error',
//       title: '失敗',
//       text: error?.response?.data?.message || '發生錯誤'
//     })
//   }
// }
</script>

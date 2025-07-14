import { createFetch } from '@vueuse/core'

export const useApi = createFetch({
  baseUrl: import.meta.env.VITE_API_URL,
  options: {
    immediate: true, // Automatically call the request when useFetch is called
    timeout: 5000, // Global timeout
    beforeFetch({ options }) {
      // Attach headers, like Authorization, if needed
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      }
      return { options }
    },
  },
})

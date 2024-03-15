import { inject } from 'vue'
import { useRoute } from 'vue-router'

export const useRouterStore = defineStore('useRouterStore', () => {
  const route = useRoute()
  // this assumes `app.provide('appProvided', 'value')` was called

  // ...

  return {
    // ...
  }
})
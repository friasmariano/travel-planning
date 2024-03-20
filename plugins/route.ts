import { useRoute } from 'vue-router'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            currentRoute: () => useRoute()
        }   
    }
})
import { initializeApp } from "firebase/app"

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {

    }
    
    const app = initializeApp(firebaseConfig)
})
import { initializeApp } from "firebase/app"
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: "AIzaSyBsOac8WumS9LZmYSKRoaXYJ_Scobb1OC4",

        authDomain: "travel-planning-37b0d.firebaseapp.com",
    
        projectId: "travel-planning-37b0d",
    
        storageBucket: "travel-planning-37b0d.appspot.com",
    
        messagingSenderId: "562416699739",
    
        appId: "1:562416699739:web:b07b28f78283ba3eadf27e",
    
        measurementId: "G-33NPH1V13L"
    }

    const app = initializeApp(firebaseConfig)

    const analytics = getAnalytics(app)
    const auth = getAuth(app)
    const firestore = getFirestore(app)

    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

    nuxtApp.vueApp.provide('firestore', firestore)
    nuxtApp.provide('firestore', firestore)
})

import { useLocalStore } from "@/stores/useLocalStore";

export default defineNuxtRouteMiddleware((to, from) => {
    const localStore = useLocalStore();

    // Check token expiration 
    
});
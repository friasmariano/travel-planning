
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useUserStore = defineStore('userStore', () => {
    const name = ref('Mariano Frias Gomez')

    const cart = ref([10, 20, 30, 40, 50])

    const cartTotal = computed(() => {
        return cart.value.reduce((sum, item) => sum + item, 0)
    })

    function addToCart() {
        cart.value.push(5)
    }

    return { addToCart, cart, cartTotal, name }
})
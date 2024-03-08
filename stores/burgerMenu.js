import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBurgerMenuStore = defineStore('burgerStore', () => {
    let active = ref(false)

    function changeStatus() {
        if (!active.value === true) active.value = true
        else active.value = false
    }

    return {
        active,
        changeStatus
    }
})
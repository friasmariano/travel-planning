
import { describe, expect, test } from 'vitest'
import { createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { useBurgerMenuStore } from '@/stores/burgerMenu'
import BurgerMenu from '../BurgerMenu.vue'

const pinia = createPinia()

describe('BurgerMenu', async () => {
    const store = useBurgerMenuStore(pinia)

    const wrapper = mount(BurgerMenu, { global: { plugins: [pinia] }})

    await store.changeStatus()

    console.log(store.active)
})
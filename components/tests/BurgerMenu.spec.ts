
import { describe, expect, test } from 'vitest'
import { createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import { useBurgerMenuStore } from '@/stores/burgerMenu'
import BurgerMenu from '../BurgerMenu.vue'

const pinia = createPinia()
const store = useBurgerMenuStore(pinia)
store.changeStatus()

const wrapper = mount(BurgerMenu, { global: { plugins: [pinia] }})

describe('BurgerMenu', async () => {
    test('It has a user summary', () => {
        const cssClass = wrapper.find('.user-summary')
        expect(cssClass.exists()).toBe(true)
    })

    test('It has an action list', () => {
        const cssClass = wrapper.find('.actions-list')
        expect(cssClass.exists()).toBe(true)
    })

    test('It has action buttons', () => {
        const buttons = wrapper.findAll('button')

        expect(buttons.length).toBe(3)
    })

    test('Action buttons have the right css classes', () => {
        const profileButton = wrapper.find('#profileButton');
        expect(profileButton.classes()).toContain('c-button')
        expect(profileButton.classes()).toContain('is-blue');

        const activityButton = wrapper.find('#activityButton');
        expect(activityButton.classes()).toContain('c-button')
        expect(activityButton.classes()).toContain('is-light');

        const logoutButton = wrapper.find('#logoutButton');
        expect(logoutButton.classes()).toContain('c-button')
        expect(logoutButton.classes()).toContain('is-red');
    })
})
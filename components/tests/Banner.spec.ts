
import { describe, expect, test } from 'vitest'
import { createMemoryHistory, createRouter } from 'vue-router'
import { mount } from '@vue/test-utils' 
import Banner from '../Banner.vue'
import routes from './router/routes'

const router = createRouter({ history: createMemoryHistory(), routes: routes })

describe('Banner', () => {
    test("Contains a text container", async () => {
        const wrapper = mount(Banner, { global: { plugins: [router] }})
        
        const cssClass = wrapper.find('.text-container')
        expect(cssClass.exists()).toBe(true)
    })

    test('Contains a title', async () => {
        const wrapper = mount(Banner, { global: { plugins: [router] }})

        const cssClass = wrapper.find('.title')
        expect(cssClass.exists()).toBe(true)
    })
    

    test('Contains a subtitle', async () => {
        const wrapper = mount(Banner, { global: { plugins: [router] }})

        const cssClass = wrapper.find('.subtitle')
        expect(cssClass.exists()).toBe(true)
    })
})

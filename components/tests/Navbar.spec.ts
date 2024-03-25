
import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'

const wrapper = mount(Navbar);
const brandLogo = wrapper.find('#brandLogo')

describe('Navbar', () => {
    test('It has a logo container', () => {
        expect(brandLogo.exists()).toBe(true)
    })

    test('It has a valid logo image', () => {
        const logoImageSrc = brandLogo.attributes('src')

        expect(logoImageSrc).toBe('/img/logo.png')
    })
})
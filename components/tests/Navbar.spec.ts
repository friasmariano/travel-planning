
import { describe, expect, test } from 'vitest'
import { createPinia } from 'pinia'
import { mount } from '@vue/test-utils'
import Navbar from '../Navbar.vue'
import fetch from 'node-fetch'

const pinia = createPinia()

const wrapper = mount(Navbar, { global: { plugins: [pinia] }})


describe('Navbar', () => {
    const brandLogo = wrapper.find('#brandLogo')

    test('It has a logo container', () => {
        expect(brandLogo.exists()).toBe(true)
    })

    test('It has a valid logo image', () => {
        const logoImageSrc = brandLogo.attributes('src')

        expect(logoImageSrc).toBe('/img/logo.png')
    })

    test('It has a profile image', () => {
        const profileIcon = wrapper.find('#profileIcon')
        expect(profileIcon.exists()).toBe(true)

        const profileImage = wrapper.find('#profileImage')
        expect(profileImage.exists()).toBe(true)

        console.log('Image was loaded successfully')
    })

    test('Profile image is valid', async () => {
        const userImage = wrapper.find('#profileImage')
        const imageURL = userImage.attributes('src')

        const response = await fetch(imageURL + '')
        expect(response.status).toBe(200)

    })
})
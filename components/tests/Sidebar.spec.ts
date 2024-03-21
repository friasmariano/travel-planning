
import { describe, expect, test } from 'vitest';
import { createMemoryHistory, createRouter } from 'vue-router'
import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue';
import routes from './router/routes';

const router = createRouter({ history: createMemoryHistory(), routes: routes })

describe('Sidebar', () => {

  test('Renders the correct number of buttons', async () => {
    const wrapper = mount(Sidebar, 
                          { global: { plugins: [router] }})
                    .findAll('button')

    expect(wrapper.length).toBe(5)
  })

  test('Routes are working properly', async () => {
    const wrapper = mount(Sidebar, { global: { plugins: [router] } })

    await router.isReady()

    // Home
    await router.push('/')
    await wrapper.vm.$nextTick()

    // Destinations
    await router.push('/destinations')
    await wrapper.vm.$nextTick()

    // Itinerary
    await router.push('/itinerary')
    await wrapper.vm.$nextTick()

    // Recommendations
    await router.push('/recommendations')
    await wrapper.vm.$nextTick()

    // Weather
    await router.push('/weather')
    await wrapper.vm.$nextTick()
  })

})
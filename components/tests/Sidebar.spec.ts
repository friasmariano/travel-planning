
import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue';

describe('Sidebar', () => {
  test('Renders the correct number of buttons', () => {
    // Wrapper
    const buttons = mount(Sidebar).findAll('button')
    expect(buttons.length).toBe(5)
  })
})
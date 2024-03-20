
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { useRouter } from 'vue-router'
import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue';

vi.mock('vue-router')

describe('Sidebar', () => {

  test('Renders the correct number of buttons', async () => {
    const VueRouter = await import('vue-router')
    // Wrapper
    const buttons = mount(Sidebar, {
      global: {
       plugins: [useRouter]
      }
    }).findAll('button')

    expect(buttons.length).toBe(5)
  })

  /* Check this solution =>> 
  Mocking useRouter and useRoute 
  https://github.com/vuejs/test-utils/issues/242 */
})
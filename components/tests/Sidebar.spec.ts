
import { describe, expect, test } from 'vitest';
import { createRouter, createWebHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import Sidebar from '../Sidebar.vue';

const routes = [
  {
    path: '/',
    component: {
      template: ''
    }
  },
  {
    path: '/destinations',
    component: {
      template: ''
    }
  },
  {
    path: '/itinerary',
    component: {
      template: ''
    }
  },{
    path: '/recommendations',
    component: {
      template: ''
    }
  },
  {
    path: '/weather',
    component: {
      template: ''
    }
  }
]

const mockRouter = createRouter({ history: createWebHistory(), routes: routes })

describe('Sidebar', () => {

  test('Renders the correct number of buttons', async () => {
    // Wrapper
    const buttons = mount(Sidebar, {
      global: {
       plugins: [mockRouter]
      }
    }).findAll('button')

    expect(buttons.length).toBe(5)
  })

  /* Check this solution =>> 
  Mocking useRouter and useRoute 
  https://github.com/vuejs/test-utils/issues/242 */
})
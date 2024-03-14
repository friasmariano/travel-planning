
import { describe, test, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from "../HelloWorld.vue";

describe('My index page test', async () => {
  test('default text should be shown', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.text()).toContain('Hello World');
  });
});
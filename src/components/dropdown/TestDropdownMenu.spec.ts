import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import TestDropdownMenu from './TestDropdownMenu.vue'

describe('TestDropdownMenu', () => {
  test('the content renders when the button opens', async () => {
    document.body.innerHTML = ''
    const wrapper = mount(TestDropdownMenu, { attachTo: document.body })
    await wrapper.find('[vitest="dropdown-trigger"]').trigger('click')
    console.log('wrapper.html()', wrapper.html())
    expect(wrapper.find('[vitest="dropdown-trigger"]').attributes()['data-state']).toEqual('open')
    expect(wrapper.find('[role="menu"]').attributes()['data-state']).toEqual('open')
  })
})

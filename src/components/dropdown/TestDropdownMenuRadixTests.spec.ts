import { beforeEach, describe, expect, it } from 'vitest'
import type { VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { axe } from 'vitest-axe'
import { findByRole } from '@testing-library/vue'
import TestDropdownMenu from './TestDropdownMenu.vue'

describe('given default DropdownMenu', () => {
  let wrapper: VueWrapper<InstanceType<typeof TestDropdownMenu>>
  globalThis.ResizeObserver = class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(TestDropdownMenu, { attachTo: document.body })
  })

  it('should render trigger button', () => {
    expect(wrapper.find('[vitest="dropdown-trigger"]').exists()).toBeTruthy()
  })

  it('should pass axe accessibility tests', async () => {
    expect((await axe(wrapper.element)).violations).toHaveLength(0)
  })

  describe('after opening the dropdown', () => {
    beforeEach(async () => {
      await wrapper.find('[vitest="dropdown-trigger"]').trigger('click')
    })

    it('should pass axe accessibility tests', async () => {
      expect((await axe(wrapper.element)).violations).toHaveLength(0)
    })

    it('should render the menu', async () => {
      expect(await findByRole(wrapper.element as HTMLElement, 'menu')).toBeTruthy()
    })

    describe('after selecting the first item', () => {
      beforeEach(async () => {
        const item = wrapper.find('[role="menuitem"]')
        await item.trigger('click')
      })

      it('should close the modal', () => {
        expect(wrapper.find('[role="menu"]').exists()).toBeFalsy()
      })

      it('should emit select event', () => {
        expect(wrapper.emitted('select')?.length).toBe(1)
      })
    })
  })
})

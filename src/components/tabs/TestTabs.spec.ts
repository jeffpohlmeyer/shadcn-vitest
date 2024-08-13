import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { nextTick } from 'vue'
import TestTabs from './TestTabs.vue'

describe('TestTabs', () => {
    test('the ref value updates properly', async () => {
        document.body.innerHTML = ''
        const wrapper = mount(TestTabs, { attachTo: document.body })
        expect(wrapper.find('[vitest="account-panel"]').attributes()['data-state']).toEqual('active')
        expect(wrapper.find('[vitest="password-panel"]').attributes()['data-state']).toEqual('inactive')
        const password = wrapper.find('[vitest="password"]')
        await password.trigger('click')
        await nextTick()
        expect(wrapper.find('[vitest="account-panel"]').attributes()['data-state']).toEqual('inactive')
        expect(wrapper.find('[vitest="password-panel"]').attributes()['data-state']).toEqual('active')
        expect(wrapper.vm.tab).toEqual('password')
    })
})
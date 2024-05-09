import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import TestTabs from './TestTabs.vue'

describe('TestTabs', () => {
    test('the ref value updates properly', async () => {
        const wrapper = mount(TestTabs)
        expect(wrapper.vm.tab).toEqual('account')
        const account = wrapper.find('[vitest="account"]')
        const password = wrapper.find('[vitest="password"]')
        await password.trigger('click')
        expect(wrapper.vm.tab).toEqual('password')
    })
})
import {describe, it, expect, beforeEach} from "vitest";
import SubmitForm from "../SubmitForm.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {Component, nextTick} from "vue";

describe('SubmitForm', () => {
    let wrapper: VueWrapper<Component>;

    beforeEach(() => {
        wrapper = mount(SubmitForm);
    });

    it('should exist username inputs', () => {
        expect(wrapper.find('.username-input').exists()).toBe(true);
    });

    it('should exist email inputs', () => {
        expect(wrapper.find('.email-input').exists()).toBe(true);
    });

    it('should exist password and repeat-password inputs', () => {
        expect(wrapper.find('.password-input').exists()).toBe(true);
        expect(wrapper.find('.password-repeat-input').exists()).toBe(true);
    });

    it('should exist submit button with disable status', () => {
        const submit = wrapper.find('.submit');
        expect(submit.exists()).toBe(true);
        expect(submit.text()).toBe('Sign Up');
        expect((submit.element as HTMLButtonElement).disabled).toBe(true);
    });

    it('should enable button when password and repeat password same', async () => {
        const submit = wrapper.find('.submit');
        const password = wrapper.find('.password-input');
        const passwordRepeat = wrapper.find('.password-repeat-input');

        await password.setValue("any-password")
        await passwordRepeat.setValue("any-password")
        await nextTick();

        expect((submit.element as HTMLButtonElement).disabled).toBe(false);
    });


})

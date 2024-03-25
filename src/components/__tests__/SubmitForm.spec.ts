import {describe, it, expect, beforeEach} from "vitest";
import SubmitForm from "../SubmitForm.vue";
import {mount, VueWrapper} from "@vue/test-utils";
import {Component} from "vue";

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


})

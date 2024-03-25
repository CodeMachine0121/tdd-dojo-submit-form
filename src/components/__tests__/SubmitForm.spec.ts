import {describe, it, expect} from "vitest";
import SubmitForm from "../SubmitForm.vue";
import {mount} from "@vue/test-utils";

describe('SubmitForm', () => {

    it('should exist username inputs', async () => {
        let wrapper =  mount(SubmitForm)
        expect(wrapper.find('.username-input').exists()).toBe(true);
    });


})

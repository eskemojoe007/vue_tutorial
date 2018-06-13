import {shallowMount} from "@vue/test-utils";
import Ether from "@/components/Ether.vue";

describe("Ether.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Ether, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("looks for default message when nothing passed", () => {
    const msg = "default ether";
    const wrapper = shallowMount(Ether);
    expect(wrapper.text()).toMatch(msg);
  });
  it("gets the default price and checks it", () => {
    const price = 200;
    const wrapper = shallowMount(Ether);
    expect(wrapper.vm.price).toBe(price);
  });
  it("Tests the function increasePrice", () => {
    const wrapper = shallowMount(Ether);
    const price_up = 100;
    const price = wrapper.vm.price;
    wrapper.vm.increasePrice(price_up);
    expect(wrapper.vm.price).toBe(price + price_up);
  });
  it("Tests the button push", () => {
    const wrapper = shallowMount(Ether);
    const price = wrapper.vm.price;
    const button = wrapper.find("button");
    const price_up = 100;
    button.trigger("click");
    expect(wrapper.vm.price).toBe(price + price_up);
    expect(wrapper.find("#price").text()).toBe((price + price_up).toString());
    button.trigger("click");
    expect(wrapper.find("#price").text()).toBe(
      (price + price_up * 2).toString()
    );
  });
});

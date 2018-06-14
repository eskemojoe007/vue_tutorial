import { shallowMount } from "@vue/test-utils";
import Ether from "@/components/Ether.vue";

describe("Ether.vue", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(Ether);
  });
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Ether, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
  it("looks for default message when nothing passed", () => {
    const msg = "default ether";
    expect(wrapper.text()).toMatch(msg);
  });
  it("gets the default price and checks it", () => {
    const price = 200;
    expect(wrapper.vm.price).toBe(price);
  });
  it("Tests the function increasePrice", () => {
    const price_up = 100;
    const price = wrapper.vm.price;
    wrapper.vm.increasePrice(price_up);
    expect(wrapper.vm.price).toBe(price + price_up);
  });
  it("Tests the button push", () => {
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
  it("Test the max values of truncated_price", () => {
    const limit = 1000;
    expect(wrapper.vm.price).toBe(200);
    wrapper.vm.increasePrice(200);
    expect(wrapper.vm.price).toBe(400);
    expect(wrapper.find("#price").text()).toBe((400).toString());
    wrapper.vm.increasePrice(500);
    expect(wrapper.vm.price).toBe(900);
    expect(wrapper.find("#price").text()).toBe((900).toString());
    wrapper.vm.increasePrice(100);
    expect(wrapper.vm.price).toBe(1000);
    expect(wrapper.find("#price").text()).toBe((1000).toString());
    wrapper.vm.increasePrice(100);
    expect(wrapper.vm.price).toBe(1100);
    expect(wrapper.find("#price").text()).toBe(limit.toString());
    wrapper.vm.increasePrice(500);
    expect(wrapper.vm.price).toBe(1600);
    expect(wrapper.find("#price").text()).toBe(limit.toString());
  });
});

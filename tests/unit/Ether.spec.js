import { shallowMount } from '@vue/test-utils';
import Ether from '@/components/Ether.vue';

describe('Ether.vue', () => {
  let wrapper;
  let vm;
  beforeEach(() => {
    wrapper = shallowMount(Ether);
    ({ vm } = wrapper);
  });
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapperNew = shallowMount(Ether, {
      propsData: { msg },
    });
    expect(wrapperNew.text()).toMatch(msg);
  });
  it('looks for default message when nothing passed', () => {
    const msg = 'default ether';
    expect(wrapper.text()).toMatch(msg);
  });
  it('gets the default price and checks it', () => {
    const price = 200;
    expect(vm.price).toBe(price);
  });
  it('Tests the function increasePrice', () => {
    const priceUp = 100;
    const { price } = vm;
    vm.increasePrice(priceUp);
    expect(vm.price).toBe(price + priceUp);
  });
  it('Tests the button push', () => {
    const { price } = vm;
    const button = wrapper.find('button');
    const priceUp = 100;
    button.trigger('click');
    expect(vm.price).toBe(price + priceUp);
    expect(wrapper.find('#price').text()).toBe((price + priceUp).toString());
    button.trigger('click');
    expect(wrapper.find('#price').text()).toBe((price + (priceUp * 2)).toString());
  });
  it('Test the max values of truncated_price', () => {
    const limit = 1000;
    expect(vm.price).toBe(200);
    vm.increasePrice(200);
    expect(vm.price).toBe(400);
    expect(wrapper.find('#price').text()).toBe((400).toString());
    vm.increasePrice(500);
    expect(vm.price).toBe(900);
    expect(wrapper.find('#price').text()).toBe((900).toString());
    vm.increasePrice(100);
    expect(vm.price).toBe(1000);
    expect(wrapper.find('#price').text()).toBe((1000).toString());
    vm.increasePrice(100);
    expect(vm.price).toBe(1100);
    expect(wrapper.find('#price').text()).toBe(limit.toString());
    vm.increasePrice(500);
    expect(vm.price).toBe(1600);
    expect(wrapper.find('#price').text()).toBe(limit.toString());
  });
});

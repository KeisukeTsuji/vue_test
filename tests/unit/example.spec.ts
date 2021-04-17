import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("カウンターの初期表示が0", () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find(".counter").text()).toMatch("0");
  });

  it("ボタンクリックで1増加する", async () => {
    const wrapper = shallowMount(HelloWorld);
    expect(wrapper.find(".counter").text()).toMatch("0");

    wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    expect(wrapper.find(".counter").text()).toMatch("1");
  });

  it("ボタンクリックでincrement1回イベントが発生する", () => {
    const wrapper = shallowMount(HelloWorld);

    wrapper.find("button").trigger("click");

    expect(wrapper.emitted("onIncrement")).toBeTruthy();
    expect(wrapper.emitted("onIncrement")?.length).toBe(1);
  });
});

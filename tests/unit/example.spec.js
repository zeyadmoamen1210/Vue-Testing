import { mount } from "@vue/test-utils";
import Home from "@/views/HomeView.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = mount(Home);
    expect(wrapper.text()).toContain("Hello");
  });
});

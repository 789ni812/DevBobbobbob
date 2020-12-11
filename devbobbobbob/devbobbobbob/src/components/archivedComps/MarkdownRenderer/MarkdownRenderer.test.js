import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtils";
import MarkdownRendererImport from "./MarkdownRenderer";

let wrapper;
describe("<MarkdownRenderer />", () => {
  it("Renders MarkdownRenderer component without crashing", () => {
    wrapper = shallow(<MarkdownRendererImport />);
    let component = findByTestAttr(wrapper, "component-markdownRenderer");
    expect(component.length).toBe(1);
  });
});

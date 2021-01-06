import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";

describe("Component - App", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  test("App component renders", () => {
    const component = findByTestAttr(wrapper, "component-app");
    expect(component.length).toBe(1);
  });

  test("Site title renders", () => {
    const title = findByTestAttr(wrapper, "site-title");
    expect(title.length).toBe(1);
  });

  test("Naviation compoent renders", () => {
    const mainNavigation = findByTestAttr(wrapper, "component-mainNavigation");
    expect(mainNavigation.length).toBe(1);
  });

  it("renders ArticlesFromDevBob component", () => {
    const component = findByTestAttr(wrapper, "component-ArticlesFromDevBob");
    expect(component.length).toBe(1);
  });

  // Switched off Markdown render while I focus on Article build
  // test('Markdown Renderer component renders', () => {
  //  const MarkdownRenderer = findByTestAttr(wrapper, 'component-markdownRenderer')
  //  expect(MarkdownRenderer.length).toBe(1);
  // })
});

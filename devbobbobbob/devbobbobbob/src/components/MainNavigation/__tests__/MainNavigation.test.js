import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "../../../../test/testUtils";
import MainNavigation from "../MainNavigation";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<MainNavigation />);
});

describe("Main Navigation Links", () => {
  it("Renders an Li element for Home page", () => {
    const linkHomepage = findByTestAttr(wrapper, "link-homepage");

    expect(linkHomepage.length).toBe(1);
  });

  it("renders link for articles", () => {
    const linkArticles = findByTestAttr(wrapper, "link-articles");
    expect(linkArticles.length).toBe(1);
  });

  it("renders link for markdown", () => {
    const linkMarkdown = findByTestAttr(wrapper, "link-markdown");
    expect(linkMarkdown.length).toBe(1);
  });
});

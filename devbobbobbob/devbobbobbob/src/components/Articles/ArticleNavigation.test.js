import React from "react";
import { shallow } from "enzyme";
import ArticleNavigation from "./ArticleNavigation";
import { findByTestAttr } from "../../../test/testUtils";

let wrapper;
beforeAll(() => {
  wrapper = shallow(<ArticleNavigation />);
});

it("Renders a Link element for Articles", () => {
  const linkArticles = findByTestAttr(wrapper, "link-articles");
  expect(linkArticles.length).toBe(3);
});

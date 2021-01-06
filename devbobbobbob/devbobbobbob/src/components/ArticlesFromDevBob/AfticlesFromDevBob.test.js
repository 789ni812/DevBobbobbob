import React from "react";
import { shallow } from "enzyme";
import ArticlesFromDevBob from "./ArticlesFromDevBob";

it("renders ArticlesFromDevBob component", () => {
  const component = shallow(<ArticlesFromDevBob />);
  expect(component.length).toBe(1);
});

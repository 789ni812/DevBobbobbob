import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import toJson from "enzyme-to-json";

describe('<App />', () => {
it("renders without crashing", () => {
  shallow(<App />);
});

it("renders same as snapshot", () => {
  const tree = shallow(<App />);
  expect(toJson(tree)).toMatchSnapshot();
});

});


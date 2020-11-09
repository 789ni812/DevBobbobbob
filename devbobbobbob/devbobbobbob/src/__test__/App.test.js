import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Articles from "../components/Articles/Articles";
import toJson from "enzyme-to-json";

describe('<App />', () => {
  let wrapper;
  beforeAll(()=>{
      wrapper = shallow(<App />);
  });


it("renders without crashing", () => {
  shallow(<App />);
});

it ('renders App heading', () => {
  const title = (<h1>DevBobBobBob</h1>);
  expect(wrapper.contains(title)).toEqual(true);
});

it('renders the <Articles /> component', ()=>{
  expect(wrapper.containsMatchingElement(<Articles />)).toEqual(true);
});

// it("renders same as snapshot", () => {
//   const tree = shallow(<App />);
//   expect(toJson(tree)).toMatchSnapshot();
// });

});


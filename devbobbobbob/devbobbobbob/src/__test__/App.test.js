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


// it("renders same as snapshot", () => {
//   const tree = shallow(<App />);
//   expect(toJson(tree)).toMatchSnapshot();
// });

it('renders the <Articles /> component', ()=>{
  expect(wrapper.containsMatchingElement(<Articles />)).toEqual(true);
});

});


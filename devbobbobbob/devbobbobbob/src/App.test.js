import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { findByTestAttr } from "../test/testUtils";


describe('Component - App', () => {
  let wrapper;
  beforeAll(()=>{
      wrapper = shallow(<App />);
  });

test('App component renders', ()=>{
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

test('Site title renders', ()=>{
  const title = findByTestAttr(wrapper, 'site-title');
  expect(title.length).toBe(1);
});

test('Articles component renders', ()=>{
  const articles = findByTestAttr(wrapper, 'component-articles');
  expect(articles.length).toBe(1);
})

});


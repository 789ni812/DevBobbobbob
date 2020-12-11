import React from "react";
import { findByTestAttr, checkProps } from "../../../test/testUtils";
import { shallow } from "enzyme";

import { articlesArray } from "./mockedArticleArray";
import Articles from "./Articles.js";

const setup = (props = {}) => {
  const setupProps = { ...articlesArray };
  return shallow(<Articles {...setupProps} />);
};

describe("<Articles />", () => {
  it("renders without crashing", () => {
    const component = findByTestAttr(setup(), "component-Articles");
    expect(component.length).toBe(1);
  });

  it("Renders ArticleNavigation component without crashing", () => {
    const navigation = findByTestAttr(setup(), "component-ArticleNavigation");
    expect(navigation.length).toBe(1);
  });

  it("does not throw warning with expected props", () => {
    checkProps(Articles, articlesArray);
    // TODO copy example of the guessedWord component to flesh out the check props
  });

  //TODO research and setup prop types use here for reference and setup info:https://www.npmjs.com/package/prop-types

  // test('Check articleTitle in state is the same as the ArticleArray.', () => {
  //     const title = findByTestAttr(wrapper, 'articleTitle').text();
  //     console.log(wrapper.debug());
  //     expect(articlesArray[0].title.length).toBe(title.length);
  //  });
});

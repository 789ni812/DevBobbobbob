import React from "react";
import { shallow } from "enzyme";
import Article from '../components/Articles/Article';

describe ('<Article />', ()=> {
    it('renders <Article /> without crashing', () => {
        shallow(<Article />);
    });

it ('renders Article title', () => {
    const wrapper = shallow(<Article />);
    const title = (<h1>this is the static mock article title.</h1>);
    expect(wrapper.contains(title)).toEqual(true);
})
    // Article Mocked Render:
    // [] create a static article component (only use HTML) to display a full article
    //     [] title
    //     [] description
    //     [] date
    //     [] author
    //     [] tags
});
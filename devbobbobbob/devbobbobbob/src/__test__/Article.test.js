import React from "react";
import { shallow } from "enzyme";
import Article from '../components/Articles/Article';

describe ('<Article />', ()=> {
    it('renders <Article /> without crashing', () => {
        shallow(<Article />);
    });


    // it('renders the title of the article', () => {
    //         expect(wrapper.find("h1").text()).toContain("this is the static mock article title.");
    //       });
    
    // Article Mocked Render:
    // [] create a static article component (only use HTML) to display a full article
    //     [] title
    //     [] description
    //     [] date
    //     [] author
    //     [] tags
});
import React from "react";
import { shallow } from "enzyme";
import Article from '../components/Articles/Article';

describe ('<Article />', ()=> {
    let wrapper;
    beforeAll(()=>{
        //console.log('1 - beforeAll')
        wrapper = shallow(<Article />);
    });


    it('renders <Article /> without crashing', () => {
        shallow(<Article />);
    });

it ('renders Article title', () => {
    
    const title = (<h1>this is the static mock article title.</h1>);
    expect(wrapper.contains(title)).toEqual(true);
});


it('render Article description', ()=> {
    const description = (<div className="articleDescription"><p>this is the static mock description of the artivle.</p></div>);
    expect(wrapper.contains(description)).toEqual(true);
})

    // Article Mocked Render:
    // [] create a static article component (only use HTML) to display a full article
    // [] Wire up Article to Articles component
    // [] Wire up Articles component to App component
    // [] Add these fields to article component
    //     [] title
    //     [] description
    //     [] date
    //     [] author
    //     [] tags
});
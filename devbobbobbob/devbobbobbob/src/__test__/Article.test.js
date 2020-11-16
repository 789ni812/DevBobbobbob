import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Article from '../components/Articles/Article';

describe('Component - Article', ()=>{
    let wrapper;
    beforeEach(()=> {
    wrapper = shallow(<Article />)
    })
    
    test('Article component renders', ()=>{
    const component = findByTestAttr(wrapper, 'component-article');
    expect(component.length).toBe(1);
    })

    describe ('Article properties load:', () => {
    test('Title', () =>{
        const title = findByTestAttr(wrapper, 'articleTitle');
        expect(title.length).toBe(1);
    })
    
    



    
    })
})






// describe('Original testing', () =>{
//     describe ('<Article />', ()=> {
//         let wrapper;
//         beforeAll(()=>{
//             wrapper = shallow(<Article />);
//         });
    
    
//         it('renders <Article /> without crashing', () => {
//             shallow(<Article />);
//         });
    
//     it ('renders Article title', () => {
        
//         const title = (<h1>this is the static mock article title.</h1>);
//         expect(wrapper.contains(title)).toEqual(true);
//     });
    
    
//     it('renders Article description', ()=> {
//         const description = (<div className="articleDescription"><p>this is the static mock description of the article.</p></div>);
//        expect(wrapper.contains(description)).toEqual(true);
//     })
    
//     it('renders Article created date', () =>{
//     const createdDate = (<div className="createdDate">Created: 08/11/2020</div>);
//     expect(wrapper.contains(createdDate)).toEqual(true);
//     });
    
//     it('renders Artcile author', () =>{
//     const author = (<div className="author">Author: Stuart Bradford</div>);
//     expect(wrapper.contains(author)).toEqual(true);
//     });
    
//     it('renders Article tags', () =>{
//     const tags = (<div className="tags">Tags: Developer, tutorial, Article</div>);
//     expect(wrapper.contains(tags)).toEqual(true);
//     });
// });

// })


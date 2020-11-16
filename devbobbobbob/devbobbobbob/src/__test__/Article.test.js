import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
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
    
    test('Description', () =>{
        const description = findByTestAttr(wrapper, 'articleDescription');
        expect(description.length).toBe(1);
    })

    test('createdDate', () =>{
        const createdDate = findByTestAttr(wrapper, 'articleCreatedDate');
        expect(createdDate.length).toBe(1);
    })

    test('author', () =>{
        const author = findByTestAttr(wrapper, 'articleAuthor');
        expect(author.length).toBe(1);
    })


    test('tags', () =>{
        const tags = findByTestAttr(wrapper, 'articleTags');
        expect(tags.length).toBe(1);
    })

    })

    describe ('Dynamic Article props render', ()=>{
        const mockedProps = {
            article: [
                {
                    title: 'mockedTitle',
               }
            ]
        }
        test('does not throw warning with expected props',()=>{
checkProps(Article, mockedProps);
        })
    })

});



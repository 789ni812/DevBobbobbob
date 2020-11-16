
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import Article from '../components/Articles/Article';
import { articlesArray } from '../components/Articles/mockedArticleArray';



/**
 * Factory function to create a ShallowWrapper for the Article component.
 * @function setup
 * @param {object} props - Component props, specific to this setup
 * @return {ShallowWrapper} 
 */
const setup = () => {
    return shallow(<Article />)

}

describe('Component - Article', ()=>{
 let wrapper;
 beforeEach(() =>{
     wrapper = setup();
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
        
        const setupWithProps = (props = {}) => {
            const setupProps = {...articlesArray};
            return shallow(<Article {...setupProps} />)
        }

        let wrapper = setupWithProps();
        console.log(wrapper.debug());

      
        test('does not throw warning with expected props',()=>{
checkProps(Article, articlesArray);

        })

        test('Check articleTitle in state is the same as the ArticleArray.', () => {
           const title = findByTestAttr(wrapper, 'articleTitle').text();
           expect(articlesArray[0].title.length).toBe(title.length);
        });
        
    })

});



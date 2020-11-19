
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../../test/testUtils';
import Article from './Article';
import { articlesArray } from './mockedArticleArray';



/**
 * Factory function to create a ShallowWrapper for the Article component.
 * @function setup
 * @param {object} props - Component props, specific to this setup
 * @return {ShallowWrapper} 
 */
const setup = () => {
    return shallow(<Article article={articlesArray[0]}/>)

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

    describe ('Article properties and array properties render:', () => {
    
    test('Check articleTitle in state is the same as the ArticleArray.', () => {
        const title = findByTestAttr(wrapper, 'articleTitle').text();
        expect(articlesArray[0].title.length).toBe(title.length);
     });
    
    test('Description', () =>{
        const description = findByTestAttr(wrapper, 'articleDescription').text();
        expect(articlesArray[0].description.length).toBe(description.length)
    })

    test('createdDate', () =>{
      const createdDate = findByTestAttr(wrapper, 'articleCreatedDate').text();
      expect(articlesArray[0].createdDate.length).toBe(createdDate.length);
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
        
        test('does not throw warning with expected props',()=>{
checkProps(Article, articlesArray);

        })

        
        
    })

});



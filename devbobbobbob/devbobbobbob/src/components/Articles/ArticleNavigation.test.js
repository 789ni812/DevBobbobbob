import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import ArticleNavigation from './ArticleNavigation';
import articlesArray from './mockedArticleArray';



let wrapper;

const setup = () => {
    return shallow(<ArticleNavigation articles={articlesArray} />)
}

const wrapperM = () => { 
    return mount(
    <ArticleNavigation />,
    { context: { articleSelected: 'none' } },
  );
}
describe('<ArticleNavigation />', ()=> {
    test('Article Navigation component renders without crashing', () => {
wrapper = setup();
        const articleNav = findByTestAttr(wrapper, 'component-article-navigation')
        expect(articleNav.length).toBe(1)
    });

    test('Amount of Articles in the articleArray and articleNaviagtion state are the same', () => {
        const articles = findByTestAttr(wrapper, 'list-article');
        expect(articles.length).toBe(articlesArray.length)
    })

    describe('Article navigation links', ()=>{
        
        test('Confirm ArticleSelected state starts default state of `none`', () => {
            
           
              //console.log(wrapperM.debug())
//             expect(wrapperM.context().articleSelected).to.equal('none');
// expect(wrapperM.context('articleSelected')).to.equal('none');
        })
    })
})
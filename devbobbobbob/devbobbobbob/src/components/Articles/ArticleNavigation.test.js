import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';

import ArticleNavigation from './ArticleNavigation';
import articlesArray from './mockedArticleArray';



let wrapper;

const setup = () => {
    return shallow(<ArticleNavigation articles={articlesArray} />)
}
describe('Article Navigation', ()=> {
    test('Article Navigation component renders without crashing', () => {
wrapper = setup();
        const articleNav = findByTestAttr(wrapper, 'component-article-navigation')
        expect(articleNav.length).toBe(1)
    });

    test('Amount of Articles in the articleArray and articleNaviagtion state are the same', () => {
        const articles = findByTestAttr(wrapper, 'list-article');
        expect(articles.length).toBe(articlesArray.length)
    })
})
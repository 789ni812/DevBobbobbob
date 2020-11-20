import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import ArticleNavigation from './ArticleNavigation';

let wrapper;
describe('Article Navigation', ()=> {
    test('Article Navigation component renders without crashing', () => {
wrapper = shallow(<ArticleNavigation />)
        const articleNav = findByTestAttr(wrapper, 'component-article-navigation')
        expect(articleNav.length).toBe(1)
    });
})
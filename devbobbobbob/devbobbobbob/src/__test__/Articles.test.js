import { shallow } from 'enzyme';
import Articles from '../components/Articles/Articles.js';
import Article from '../components/Articles/Article.js';
describe('<Articles />', ()=>{
    let wrapper;
    beforeAll(()=>{
        wrapper = shallow(<Articles />);
    });

it('redners without crashing', ()=>{
shallow(<Articles />);
});

it('renders the <Article /> component', ()=>{
    expect(wrapper.containsMatchingElement(<Article />)).toEqual(true);
});
})
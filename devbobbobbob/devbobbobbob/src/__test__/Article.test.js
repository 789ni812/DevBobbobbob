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



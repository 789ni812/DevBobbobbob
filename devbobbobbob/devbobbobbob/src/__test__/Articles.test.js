import { findByTestAttr } from '../../test/testUtils';
import { shallow } from 'enzyme';
import Articles from '../components/Articles/Articles.js';

describe('<Articles />', ()=>{
    let wrapper;
    beforeAll(()=>{
        wrapper = shallow(<Articles />);
    });

    it('renders without crashing', () => {
    const component = findByTestAttr(wrapper, 'component-Articles');
    expect(component.length).toBe(1);
    });

});
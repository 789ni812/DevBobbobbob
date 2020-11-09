import { shallow } from 'enzyme';
import Articles from '../components/Articles/Articles.js';
describe('<Articles />', ()=>{


it('redners without crashing', ()=>{
shallow(<Articles />);
});

it('redners the <Article /> component', ()=>{

});
})
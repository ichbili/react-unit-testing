import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
    expect(2 + 2).not.toBe(5);
  });


Enzyme.configure({ adapter: new Adapter() });

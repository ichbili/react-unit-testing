import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import CommentBox from './CommentBox';
import CommentList from './CommentList';

// it('should have the exact title', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   //console.log(div.innerHTML); // imprime tous le code HTML rendu
//   expect(div.innerHTML).toContain('React and Redux Unit Testing Application');
//   ReactDOM.unmountComponentAtNode(div);
// });

// wrapped = wrapped component
let wrapped; 

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows one comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows one comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

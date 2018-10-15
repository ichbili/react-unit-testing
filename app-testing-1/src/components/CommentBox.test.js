import React from 'React';
import { mount } from 'enzyme';
import Root from '../root';
import CommentBox from './CommentBox';

let wrapped; 

beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});
afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});


describe('Testing the text area', () => {

beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
    });
    wrapped.update();
});
it('can enter input to the text area and submit it', () => {
    expect(wrapped.find('textarea')
    .prop('value'))
    .toEqual('new comment');
});

it('should empty the text area when user submit', () => {
    wrapped.find('textarea').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea')
    .prop('value'))
    .toEqual('');
});

}); // end of describe function
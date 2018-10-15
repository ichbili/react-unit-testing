import React from 'react';
import { mount } from 'enzyme';
import Root from 'root';
import App from './components/App';
import moxios from 'moxios';



it('can fetch a list of comment and display them', () => {
    // Attempt to render the entire App

    // Find the fetch button and click it

    // Expect to find a list of comments

});

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
    });
  });
  
  afterEach(() => {
    moxios.uninstall();
  });
  
  it('can fetch a list of comments and display them', done => {
    const wrapped = mount(
      <Root>
        <App />
      </Root>
    );
  
    wrapped.find('.fetch-comments').simulate('click');
  
    moxios.wait(() => {
      wrapped.update();
  
      expect(wrapped.find('li').length).toEqual(2);
  
      done();
      wrapped.unmount();
    });
  });
  
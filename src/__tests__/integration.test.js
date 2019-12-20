import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'

import moxios from 'moxios'
beforeEach(() => {
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'fake fetched #1'},{name: 'fake fetched #2'}]
    })
})

afterEach(() => {
    moxios.uninstall()
})
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
})



 //needed because settime will run, but the tests wont go into the callstack of 
        // the expect function, thus skipping over it
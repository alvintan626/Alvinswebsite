import React from 'react'
import { mount } from 'enzyme'

import CommentList from 'components/CommentList'
import Root from 'Root'

let wrapped;

beforeEach(()=>{
    const initialState = {
        comments: ['Comment1','Comment2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>
    )
})
afterEach(()=>{
    wrapped.unmount()
})

it('shows one "li" element per comment', ()=>{
    expect(wrapped.find('li').length).toEqual(2)
})

it('displays comment submitted onto browser',()=>{
    expect(wrapped.render().text()).toContain('Comment1')
    expect(wrapped.render().text()).toContain('Comment2')
})
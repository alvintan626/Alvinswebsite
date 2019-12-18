import React from 'react'
import CommentBox from 'components/CommentBox'
import {mount} from 'enzyme'

import Root from 'Root'
let wrapped;

beforeEach(()=>{
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    )
})
afterEach(()=>{
    wrapped.unmount()
})

it('has a text area and a button',()=>{
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)
})

describe('the text area', ()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target: {value: 'new comment'}
        })
        wrapped.update() //rerenders the react code after set state
    })
    
    it('has a text area that users can type in',()=>{
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
    })
    
    it('has empties the text area after user submits form',()=>{
        wrapped.find('form').simulate('submit')
        wrapped.update()
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})
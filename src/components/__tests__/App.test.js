import React from 'react'
import App from 'components/App' // jsconfig.json creates this absolute path so dont have to '../App';dont have to use relative paths
import { shallow } from 'enzyme'
import CommentBox from 'components/CommentBox' 
import CommentList from 'components/CommentList'

// it(desc, login)
// it = global function
// desc = description of test
// logic = function cotaining our test logic

//JSDOM is a dependency that allows document to be act like a browser, global object from the browser
// for us to manipulate
// its like creating a fake div which is solely within memory, inside the terminal and 
// does NOT actualyl happen in a browser

// it('shows a comment box', ()=>{
//     const div = document.createElement('section')
//     ReactDOM.render(<App/>,div)
//     expect(div.innerHTML).toContain('Comment Box')
//     // expect(x).y(z)
//     /*
//     x = the thing we want to verify
//     y = designates how we want to inspect the subject/ matcher statement
//     z = value we exxpect to see
//     */
//     ReactDOM.unmountComponentAtNode(div) // code cleanup
// })

let wrapped;

beforeEach(() => {
    wrapped = shallow(<App />)
})
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1)
})

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})
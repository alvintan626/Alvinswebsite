import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

import Root from 'Root'

ReactDOM.render(
    <Root store={createStore(reducers,{})}>
        <App />
    </Root>
, document.querySelector('#root'))
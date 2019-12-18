import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'

//Redux setup
import {Provider} from 'react-redux' //provider is the redux store
import { createStore } from 'redux' // connect function to cnenct to redux store
import reducers from 'reducers'

ReactDOM.render(
    <Provider store={createStore(reducers,{})}>
        <App />
    </Provider>
, document.querySelector('#root'))
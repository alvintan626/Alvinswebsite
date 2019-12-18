import React from 'react'
//Redux setup
import {Provider} from 'react-redux' //provider is the redux store
import { createStore } from 'redux' // connect function to cnenct to redux store
import reducers from 'reducers'

export default props => {
    return (
        <Provider store={createStore(reducers,{})}>
            {props.children}
        </Provider>
    )
}
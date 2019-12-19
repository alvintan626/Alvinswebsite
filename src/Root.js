import React from 'react'
//Redux setup
import {Provider} from 'react-redux' //provider is the redux store
import { createStore } from 'redux' // connect function to cnenct to redux store
import reducers from 'reducers'

                // props in these parameters
export default ({children,initialState = {}}) => {
    return (
        <Provider store={createStore(reducers,initialState)}>
            {children}
        </Provider>
    )
}
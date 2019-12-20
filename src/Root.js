import React from 'react'
//Redux setup
import {Provider} from 'react-redux' //provider is the redux store

import { createStore, applyMiddleware } from 'redux' // connect function to cnenct to redux store
import reduxPromise from 'redux-promise'
import reducers from 'reducers'

                // props in these parameters
export default ({children,initialState = {}}) => {
    const store = createStore(reducers,initialState,applyMiddleware(reduxPromise))
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
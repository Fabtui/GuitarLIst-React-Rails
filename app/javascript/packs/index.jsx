import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { App } from '../src/containers/app'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import guitarsReducer from '../src/reducers/guitars_reducer'

const reducers = combineReducers({
 guitars: guitarsReducer
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
    <App/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

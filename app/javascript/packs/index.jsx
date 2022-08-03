import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { App } from '../src/containers/app'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import guitarsReducer from '../src/reducers/guitars_reducer'
import { GuitarStore } from '../src/stores/guitar_store';

const reducers = combineReducers({
  guitars: guitarsReducer
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      {/* <App/> */}
      <GuitarStore/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

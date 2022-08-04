import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../src/components/app'
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import guitarsReducer from '../src/reducers/guitars_reducer'
import selectedGuitarReducer from '../src/reducers/selected_guitar_reducer';

const reducers = combineReducers({
  guitars: guitarsReducer,
  selectedGuitar: selectedGuitarReducer
});

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <App/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

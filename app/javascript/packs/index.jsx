import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from '../src/components/app'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import guitarsReducer from '../src/reducers/guitars_reducer'
import selectedGuitarReducer from '../src/reducers/selected_guitar_reducer';

const reducers = combineReducers({
  guitars: guitarsReducer,
  selectedGuitar: selectedGuitarReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})

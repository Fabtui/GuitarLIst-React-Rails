import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GuitarIndex from '../src/components/guitar_index'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createRoot } from 'react-dom/client';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import guitarsReducer from '../src/reducers/guitars_reducer'
import selectedGuitarReducer from '../src/reducers/selected_guitar_reducer';

const reducers = combineReducers({
  guitars: guitarsReducer,
  selectedGuitar: selectedGuitarReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(reduxPromise)
  ));

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('guitar_list');
  const root = createRoot(container); // createRoot(container!) if you use TypeScript
  root.render(
    <Provider store={store}>
      <GuitarIndex/>
    </Provider>
  )
})

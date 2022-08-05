import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import GuitarIndex from './components/guitar_index'
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import { createRoot } from 'react-dom/client';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import guitarsReducer from './reducers/guitars_reducer'
import pickupsReducer from './reducers/pickups_reducer';
import selectedGuitarReducer from './reducers/selected_guitar_reducer';
import setNeckPickupReducer from './reducers/neck_pickup_reducer';
import setCenterPickupReducer from './reducers/center_pickup_reducer';
import setBridgePickupReducer from './reducers/bridge_pickup_reducer';

const reducers = combineReducers({
  guitars: guitarsReducer,
  pickups: pickupsReducer,
  selectedGuitar: selectedGuitarReducer,
  neckPickup: setNeckPickupReducer,
  centerPickup: setCenterPickupReducer,
  bridgePickup: setBridgePickupReducer
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

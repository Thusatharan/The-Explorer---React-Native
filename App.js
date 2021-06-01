import { StatusBar } from 'expo-status-bar';
import React from 'react';
import MainNavigator from './navigation/MainNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placesReducer from './store/PlacesReducer';


const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return <Provider store={store}>
    <MainNavigator />
  </Provider>;
}

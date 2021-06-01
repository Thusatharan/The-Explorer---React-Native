import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import MainNavigator from './navigation/MainNavigator';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import placesReducer from './store/PlacesReducer';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';


const fetchFonts = () => {
  return Font.loadAsync({
      'PTSerif' : require('./assets/fonts/PTSerif-Regular.ttf'),
      'PTSerifBold' : require('./assets/fonts/PTSerif-Bold.ttf'),
  });
};

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish = {() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return <Provider store={store}>
    <MainNavigator />
  </Provider>;
}

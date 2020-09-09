import * as React from 'react';
import axios from 'axios';
import * as Expo from "expo";
import * as Font from 'expo-font';
import {
  applyMiddleware,
  combineReducers,
  createStore
} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import feed from './src/features/feed/redux';
import { Header, Feed } from './src/components';
import { Provider } from 'react-redux';

axios.defaults.baseURL = 'https://api.TheDogAPI.com/v1';
axios.defaults.headers.common = {
  'x-api-key': `f6f70f51-38c7-4dc0-b382-3e784b348a42`
};

const enhancer = composeWithDevTools(applyMiddleware(thunk));
const combinedReducers = combineReducers({ feed });
const store = createStore(combinedReducers, enhancer);

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({ 'Oswald-Bold': require('./assets/fonts/Oswald-Bold.ttf') })
      .then(() => {
        setLoaded(true);
      }).catch(error => {
        console.warn(error);
      })
  }, []);

  if (loaded) {
    return (
      <Provider store={store}>
        <Header />
        <Feed />
      </Provider>
    )
  } else {
    return <Expo.AppLoading />
  }
}

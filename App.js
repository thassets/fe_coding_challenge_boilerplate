import * as React from "react";
import * as Font from "expo-font";
// import { applyMiddleware, combineReducers, createStore } from "redux";
import axios from "axios";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { Header } from "./src/components";
import { Provider } from "react-redux";
import AppLoading from "expo-app-loading";

/**
 * Axios has been pre-configured with a base api url,
 * api key headers, and GET query params/POST body data
 * that will make communicating with the API easier.
 *
 * `sub_id` is the user id used in all Dog API requests.
 * It has been pre-configured for you using $(WHOAMI).
 */
axios.interceptors.request.use((config) => {
  config.baseURL = "https://api.TheDogAPI.com/v1";
  config.headers.common = {
    "x-api-key": `f6f70f51-38c7-4dc0-b382-3e784b348a42`,
  };
  if (config.url.includes("/images") && config.method === "get") {
    try {
      if (!config.params) {
        config.params = {};
      }
      config.params["sub_id"] = process.env.EXPO_USER;
    } catch (error) {
      console.warn("Unable to add sub_id to get /images request");
    }
  }
  if (config.url.includes("/votes") && config.method === "post") {
    try {
      if (!config.data) {
        config.data = {};
      }
      config.data["sub_id"] = process.env.EXPO_USER;
    } catch (error) {
      console.warn("Unable to add sub_id to post /votes request");
    }
  }
  return config;
});

// const enhancer = composeWithDevTools(applyMiddleware(thunk));
// const combinedReducers = combineReducers({});
// const store = createStore(combinedReducers, enhancer);

export default function App() {
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    Font.loadAsync({ "Oswald-Bold": require("./assets/fonts/Oswald-Bold.ttf") })
      .then(() => {
        setLoaded(true);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  if (loaded) {
    return (
      // <Provider store={store}>
      <Header />
      // </Provider>
    );
  } else {
    return <AppLoading />;
  }
}

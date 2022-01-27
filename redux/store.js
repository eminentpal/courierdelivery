import { createStore, combineReducers, applyMiddleware } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer } from "./reducers/userReducers";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }

  //but if we are in production
  return applyMiddleware(...middlware);
};

const reducers = combineReducers({
  auth: authReducer,
});

//hydrate is process of filling container with data

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore);

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// // import { listReducer, urlReducer } from "./reducers/urlReducer";
// import { authReducer } from "./reducers/userReducers";

// const reducer = combineReducers({
//   // urlList: listReducer,
//   auth: authReducer,
// });
// //we check if we on server or client cus localstorage doesnt run on server side
// const serv = typeof window === "undefined";

// let initialState = {};

// const middlware = [thunk];
// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middlware))
// );

// export default store;

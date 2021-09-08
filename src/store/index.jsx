import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { listingsReducer } from "store/reducers/listingReducer";
import userReducer from "./reducers/userReducer";

const rootReducers = combineReducers({
  listings: listingsReducer,
  users: userReducer,
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
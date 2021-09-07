import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { listingsReducer } from "store/reducers/listingReducer";

const rootReducers = combineReducers({
  listings: listingsReducer,
});

export const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reporter from "./middleware/reporter.js";
import thunk from "./middleware/thunk.js";

import swReducers from "./swReducers.js";

let reducers = combineReducers({
  people: swReducers
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(reporter, thunk)));
export default store;

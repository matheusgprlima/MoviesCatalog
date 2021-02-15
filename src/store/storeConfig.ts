import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
export const store = applyMiddleware(thunk)(createStore)(reducers);

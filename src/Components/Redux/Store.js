import { createStore,applyMiddleware } from "redux";
import weatherReducer from "./weatherReducer";
import thunk from "redux-thunk";

const myStore = createStore(weatherReducer, applyMiddleware(thunk))
export default myStore;
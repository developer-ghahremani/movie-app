import { applyMiddleware, combineReducers, createStore } from "redux";

export const store = createStore(combineReducers(require("./reducer")));

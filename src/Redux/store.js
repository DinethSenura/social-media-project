import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";

const rootReducrs=combineReducers({
auth:authReducer
})

export const store=legacy_createStore(rootReducrs,applyMiddleware(thunk))
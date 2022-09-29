// import { createStore} from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
    // with multiple reducer, multiple slice we add an object like reducer: { counter: counterSlice.reducer, ...etc. }
    reducer: { counter: counterReducer, auth: authReducer }
});

export default store;
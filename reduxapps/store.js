/* craete a store */

import { configureStore } from "@reduxjs/toolkit";

import reducer from "./reducers";

const store = configureStore({
    reducer : reducer
})

export default store;
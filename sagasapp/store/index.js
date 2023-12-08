/* eslint-disable prettier/prettier */
/* Create store and make suire that the SAGA Midfdleware and Reducer is used to configure it*/
/*
 create a Saga Middleware using @redux-saga/core package
 npm install @redux-saga/core
 This package provide 'creareSagaMiddleware()' method
*/

// import createSagaMiddleware from "@redux-saga/core";
import createSagaMiddleware from 'redux-saga';
import {reducers} from './../reducres';
import {  configureStore } from "@reduxjs/toolkit";
import rootSaga  from "../effects";
/* an object that will be used to create and initialize the Middleware are root level */
const sagaMiddleware = createSagaMiddleware();

/* COnfigure store */
/* getDefaultMiddleware: Implicit method that will inform RN that the Async calls are initiated 
...getDefaultMiddleware(): Create an middleware array object will it will add muktiple middlewares in it 
*/
const store = configureStore({
  reducer: reducers,
  middleware:(getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

/* Run the middleware at global level so that they will monitor all actions */

sagaMiddleware.run(rootSaga);

export default store;


/* eslint-disable prettier/prettier */
/* Create a Saga Middleware */

/*
  npm install saga redux-saga
*/

/* Import the Saga Object Model from redux-saga */

import {takeLatest, call, put, all} from 'redux-saga/effects';

/* import Action COnstants */

import { ADD_CATEGORY, ADD_CATEGORY_SUCCESS, LIST_CATEGORIES, LIST_CATEGORIES_SUCCESS } from '../constants';

import { HttpService } from "../../services/httpservice";
 

/* Methods to Access service method those are returning Promise object */

function loadCategories(){
    let serv = new HttpService();
    /* Subscribing to the Promise returnd by the HTTP Call */
    let response = serv.getCategories().then(resp => resp.data);
    /* return the resolved promise */
    return Promise.resolve(response);
}

function saveCategory(category) {
    let serv = new HttpService();
    /* Subscribing to the Promise returnd by the HTTP Call */
    let response = serv.postCategory(category).then(resp => resp.data);
    /* return the resolved promise */
    return Promise.resolve(response);
}

/* Create Saga Generator Methods a a Combination of Input and Output action */
/* An input action generator will be executed based on 'INPUT_ACTION' dispatched from View and it will link this with output generator method. The Output generator method will call and resolve async operations and dispatch 'OUTPUT_ACTION' */

/* action: The dispatched action type
we cna ready the input payload from it
*/
function* addCategorySuccessOutputGeneraor(action){
  try {
    const category = action.payload;
    console.log(`Received data for POST ${JSON.stringify(category)}`);
    /* call will invoke the saveCategory and pass category object to it */
    const response = yield call(saveCategory, category);
    console.log(`The POST Response : ${JSON.stringify(response)}`);
    /* Diapatch the success */
    yield put({
        type: ADD_CATEGORY_SUCCESS,
        payload: response
    });
  }catch(e){
    /**  Dispatch Error Action, Frankly YOUR HEADACE */
  }
}

function* addCategoryInputGenerator(){
  console.log(`In Add Category Input Saga`);
    /* the action to be dispatched for input 
      since the ADD_CATEGORY represent an action creator as
      addCategory that accepts the payload as 'category'
      the tekeLaest can access it usign the 'actio' object
      The take latest will pass this 'action' object to
      addCategorySuccessOutputGeneraor function
    */
     yield takeLatest(ADD_CATEGORY, addCategorySuccessOutputGeneraor);
} 


function* getCategoriesSuccessOutputGenerator(){
  try{
    console.log(`In Output Generator`);
    /* Call the method to get Categories */
    const response = yield call(loadCategories);
    console.log(`Ala ka data ${JSON.stringify(response)}`);
    /* Dispatch output action */
    yield put ({
        type: LIST_CATEGORIES_SUCCESS,
        payload: response
    })
  }catch(e){
    /* Dispatch Error Action */
  }
}
function* getCategoriesInputGenerator(){
  console.log('Received List Request');
  yield takeLatest(LIST_CATEGORIES, getCategoriesSuccessOutputGenerator);
}


/* Collect all input generator and initialize them at global level in store */

export default function* rootSaga(){
  console.log(`In Root Saga`);
  yield all([getCategoriesInputGenerator(), addCategoryInputGenerator()]);
} 
/* Create a reducer function  */

import { createReducer } from "@reduxjs/toolkit";
import { addEmp } from "../actions";
import { json } from "express";

/* define an initia State  */
/* EMpty EMployee Array */
const initialState = {emps:[]};


/* create a rediucer */
/* The callback is a Builder object that builds the reducer function which will
 monitor the addEmp Action dispatched
*/
const reducer = createReducer(initialState, (builder)=>{
    /* teh state is an initialState which is emplty employee array
      and action is teh 'addEmp' action which is returning payload as 'emp'
      the reducer will mutate the payload in state
     */
    builder.addCase(addEmp, (state, action)=>{
        /* State Mutation */
        state.emps = [...state.emps, action.payload];
        console.log(`The state = ${JSON.stringify(state)}`);
    })
});

export default reducer;
/* Define Initiate and Success Actions */
import { createAction } from "@reduxjs/toolkit";
import { ADD_CATEGORY,LIST_CATEGORIES} from "../constants";


export const addCategory = createAction(ADD_CATEGORY,(category) => {
    console.log(`Dispatch Acyion ${JSON.stringify(category)}`);
    return {
        payload: category
    };
});

export const listCategory = createAction(LIST_CATEGORIES,() => {
    console.log('Request for List Category');
    return {
        payload: 'List Category Request is initiated'
    };
});


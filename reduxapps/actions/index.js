import { createAction } from "@reduxjs/toolkit";
import { ADD_EMP } from "../constants";
/* Action  Creator that will be dispatched from View and wl accept emp as parameter and process it and will return modified emp object */
export const addEmp = createAction(ADD_EMP, (emp)=>{
    console.log(`Received data ${JSON.stringify(emp)}`);
    emp.EmpName = emp.EmpName.toUpperCase();
    return {
        payload: emp
    };
});
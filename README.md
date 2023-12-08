# React Native

- Component Syntaxes

   - Traditional Funcaitonal Component
````javascript
function MyComponent(){

   return ();
}
````

   - Constant FUnction Expression
````javascript
   const MyComponent=()=>{

      return ();
   }
````
   - Const Functional Component Placeholder
      - the component is a Self-COntained HTML object that is called for Re-Usability
````javascript
   const MyComponent=()=>(

   ); 

````


- Standard UI Components
   - View
      - Container aka Layout UI Element
      - ScrollView     
   - Text, the constant text aka label
   - TextInput, the Input component i.e. TextBox
      - onChangeText Event
   - Button
      - onPress Event 
   - StyleSheet
      - USed to Define the CSS
         - Bound to datatype aka Static Type

- Design the Component
   - Plan for UI Components from RN
      - Layout
         - View
         - SafeView (iOS)
      - Interactivity Components
         - TextInput
         - Pressable
         - TouchableOpacity
      - Collection aka List Components, aka Data Bound Components 
         - FlatList
            - Complex Component Container
         - ScrollableList
         - SectionList
      - Events BAsed
         - Button
         - ActivityIndicator   
         - Pressable (RN 0.70+)
         - TouchableOpacity
         - Modal
      - Custom UI
         - Plan UI requirements and check if it is designed and developed using standard UI Elements
            - Allows you to choose the standard UI for the custom UI requirements
               - Standard UI Elements has their own
                  - Properties
                     - Used to Set values received from Parent Component and helps in Rendering the UIs
                  - Events
                     - Used to Emit data from this Custom UI to its Parent
         - Collect the required data and its schema so that you can read its properties and value of each property to Generate UI
            - Used for Rendering the UI
         - Define Behavior (Event based methods) so that the user of this Custom UI can extract data from it
            - A Custom Method that will be invoked based on standard Event and will be responsible to Emit data to the parent
      - Storage Services 
         - AsyncStorage    
            - An Object to store the data in Key/Value Pair
            - The data is Stored in JSON format
            - The Access is complete asynchronous w/o blocking the UI Thread
               - setItem('KEY', value)
               - getItem('Key')
               - clear()
                  - Remove all entries
               - npm install @react-native-async-storage/async-storage   
         - Component Update Conditions
            - useState(initial Value, SetState Callback)
               - The initial value will be updated based on the SetState 
               - useReducer()
               - useRef()
               - useCallback() 
            - props
               - New value for the props will be send by Parent to Child

      - External Calls / Networking, the 'useEffect()'
         - HTTP
            - Promise Object, ES 6
               - A Container that is responsible to Manage Async Code Execution
                  - HTTP
                  - Resource Access for Native Device Services
               - Promise() Class
                  - then()
                     - Represent a Successful Execution
                  - catch()
                     - Error Occurred during Execution
                  - Promise(SYNC).then(ASYNC).catch(ASYNC); 
                     - .then().then().then().then()......
                     - Promise.all([.]);     
            - AJAX / Ajax (Retired)
            - The 'useEffect()' Hook
               - Invoked for Mounting of the Component means will be executed when the Compoenent complets its mounting
               - Will execute a logic when the Component is being UnMounted
               - Will inform to the Rendering that the state is updated, Rendering is done based on update so stop the execution
````javascript
   useEffect(()=>{Code to execute for post mounting return()=>Code to execute during unmounting},[DEPENDENCY-ARRAY])
      - DEPENDENCY-ARRAY, once the state specifoed in this array is changed stop the execution  
````
         - use the 'axios' Library for HTTP Calls
            - Promise based library
            - npm install --save axios
               - get(), post(), pue(), delete()
                  - All these methods returns Promise of the type AxiosResponse
````javascript
  Promise<AxiosResponse<T>>
  /* T is the type of data that will be returned */

````

         - https://catprdapi.azurewebsites.net/api/Category
         
         - Socket
            - ws + http
         - Stream      
            - stream + http  
      - Device State Events with Turbo Modules
         - AppState Object
            - App Lifecycle based on the Devive Control Events
         - BackHandler Object  
            - Interacts with the Device Back Button    
            
      - Navigation
         - Based on SPA        

# Redux
- redux, replaced by @reduxjs/toolkit
   - action
      - what has happened
      - the event dispatched from Component 
      - This will create 'action creator'
         - A function that will accept input as data send by the event
         - Return output action using ACTION_TYPE
            - ACTION_TYPE
               - A JSON object having two properties
                  - type: Output Action Name
                  - payload: The output data
         - For Synchronous Actions the result is sponteneous (immediate)
         - For Async execution of the Action Creator the output will be based on 'Middleware?'       
   - reducer
      - A Pure function
      - This accepts 'initialState' and 'dispatched action' as input parameters
      - BAsed on the 'dispateched action' the state is updated in store and the lates store state is returned
      - Technically
         - We can have mutiple reducers
         - One Reducer function can call other reducer function
         - (Caution): Don't write complex logic in Reducer function
            - e.g. HTTP Calls, Large Array Processing, DateTime Operations
   - store
      - The Single Source of Truth
      - A Global Object that is bound with the 'Container-Component' on React (React-Native) application
   - Object  and Functions
      - createStore(), deprecated by configureStore()
      - configureStore(reducer, enhancer)
         - USed to define a store at global level
         - the 'reducer' parameter informs to the store that 'they are contineously monitoring all actions those are dispatched'
         - the 'enhancer' (NOT RECOMMENDED IN PRODUCTION) 
            - a store simulator
            - If the Middlewares are used then this is mandatory
      - combineReducers({Accepts Multiplem Reducers and load them at once at global level})
         - This will make it easy to add/modify reducer functions  
         - Technically
            - we can create a single reducer function as JavaScript Object Literal   
   - @reduxjs/toolkit (latest to be used for Modern Apps)
      - createAction()
````javascript
/*
parameter 1: ADD_EMP: Action Type, that represents an action that is dispatched
parameter 2: Callback function that represents the Action Creator Logic
Returns : the 'payload' aka the modified output parameter
*/
export const addEmp= createAction(ADD_EMP, (emp)=>{
    console.log(`In Action ${JSON.stringify(emp)}`);
   emp.EmpName = emp.EmpName.toUpperCase(); 
   return {
      payload: emp
   }
});
````
      - createReducer()
````javascript
/*
1. Parameter 1: Initial State
2. Parameter 2: The callback function that is accepting a reducer builder object which is the logic for reducer
   - The builder object has the 'addCase()' method 
      - Parameter 1: The Output Action for the input action e.g. addEmp
      - Parameter 2: A Callback with following parameters
         - state: to be updated in store
         - action: the action which is dispatched from the Component 
*/
export const empsReducer = createReducer(initialState, (builder)=>{
   
    builder.addCase(addEmp,(state,action)=>{
         state.emps.push(action.payload);
         console.log(`in reducer ${JSON.stringify(state)}`);
    })
}); 
````
      - configureStore()                  
- react-redux
   - Hooks to connect React (React-Native) to Redux    
   - connect(), deprecated
      - Used to connect the store with Components   
   - useDispatch()
      - used to dispatch an action from View (Component)     
   - useSelector()
      - used to subscribe the store from View
   - Provider
      - a Container Component that has 'store' property to subscribe to application store
      - This container manages all children component and provides an access of store to them  

   - Process
      - ReduxProviderComponent used 'Provider' which is configured with 'store', this store is configured used 'reducer'. The 'reducer' will monitor every action dispatched by component
      - The 'Provider' is executing 'MainReduxComponent' and hence the 'store' is available to 'MainReduxComponent' and all of its children components those are 'AddEmpComponent' and 'ListEmployeesComponent'
      - The 'MainReduxComponent' is using the 'useSelector()' to subscribe to 'store' to query data from the store
      - The 'AddEmplComponent' uses 'useDispatch()' to dispatch 'addEmp' action and pass 'emp' to it. The 'addEmp' action updates the 'emp' object and return it
      - the 'reducer' monitor the  'addEmp' action  and wherever return payload from it is updated into the store
      - Since the MainReduxComponetn os subscribe to the store, its read data from store and pass it to ListEmployeesComponent using 'props' and the ListEmployeesComponent shops the data   


    # SAGA
    - redux-saga
      - npm install saga redux-saga
   - Define Action Constants
````javascript
export const ADD_CATEGORY = 'ADD_CATEGORY';
export const ADD_CATEGORY_SUCCESS = 'ADD_CATEGORY_SUCCESS';
export const LIST_CATEGORIES = 'LIST_CATEGORIES';
export const LIST_CATEGORIES_SUCCESS = 'LIST_CATEGORIES_SUCCESS';
````

   - define actions

````javascript
/* Define Initiate and Success Actions */
import { createAction } from "@reduxjs/toolkit";
import { ADD_CATEGORY,LIST_CATEGORIES} from "../constants";


export const addCategory = createAction(ADD_CATEGORY,(category) => {
    return {
        payload: category
    };
});

export const listCategory = createAction(LIST_CATEGORY,() => {
    return {
        payload: 'List Category Request is initiated'
    };
});



````
      - The SAGA COde
````javascript

/* Create a Saga Middleware */

/*
  npm install saga redux-saga
*/

/* Import the Saga Object Model from redux-saga */

import {takeLatest, call, put,all} from 'redux-saga/effects';

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
    let response = serv.postCategory().then(resp => resp.data);
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
  yield takeLatest(LIST_CATEGORIES, getCategoriesSuccessOutputGenerator);
}


/* Collect all input generator and initialize them at global level in store */

export const rootSaga = () =>{
   yield all([getCategoriesInputGenerator(),addCategoryInputGenerator()])   
}

````

   - The reducer
````javascript

import { ADD_CATEGORY,ADD_CATEGORY_SUCCESS,LIST_CATEGORIES,LIST_CATEGORIES_SUCCESS} from "../constants";

import { createReducer } from "@reduxjs/toolkit";

/* Defibe a state */

const initialState = {
    categories:[], /* for colleciton of categories */
    category:{} /* Single Category */
};

export const reducers = createReducer(initialState, (builder)=>{
    /* Initial call, there is nothing is state */
    builder.addCase(LIST_CATEGORIES, (state,action)=>{
        state.categories = [];
        state.category = {};
    }).addCase(LIST_CATEGORIES_SUCCESS, (state, action) => {
        /* Add received category data in State */
        state.categories = action.payload;
        console.log(`After success for LIST Categories = ${JSON.stringify(state.categories)}`);
    }).addCase(ADD_CATEGORY, (state,action) => {
        state.category = action.payload;
    }).addCase(ADD_CATEGORY_SUCCESS, (state,action) => {
        /* get the newly created category */
        state.category = action.payload;
        /* Mutate it in state */
        state.categories.push(action.payload);
    })
});


````
    - Create Views
    - Add Category View
````javascript
import { useState } from "react";
import { View,Text,TextInput,Button } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "../../uiapps/styles";
import {addCategory} from './../actions';

const AddCategoryComponent = () => {
    const [category,setCategory] = useState({CategoryId:'0', CategoryName:'',BasePrice:'0'});
    const dispatch = useDispatch();
    const addCategory =() =>{
        /* Dispatch Action */
        dispatch(addCategory(category))
    };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Category Id:</Text>
            <TextInput value={category.CategoryId} style={styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryId:text})}
            />
              <Text style={styles.text}>Category Name:</Text>
            <TextInput value={category.CategoryName} style={styles.textInput}
              onChangeText={text=>setCategory({...category, CategoryName:text})}
            />
              <Text style={styles.text}>Base Price:</Text>
            <TextInput value={category.BasePrice} style={styles.textInput}
              onChangeText={text=>setCategory({...category, BasePrice:text})}
            />
            <Button title="Save" onPress={addCategory}/>
        </View>
    );
};

export default AddCategoryComponent;


````

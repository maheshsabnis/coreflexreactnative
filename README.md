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
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
      - Navigation
         - Based on SPA        
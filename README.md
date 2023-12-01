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
      - External Calls / Networking, the 'useEffect()'
         - HTTP
         - Socket
            - ws + http
         - Stream      
            - stream + http  
      - Navigation
         - Based on SPA        
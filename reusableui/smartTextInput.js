/* eslint-disable prettier/prettier */
import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
/* the props to accept and emit data from and to parent component */
const SmartTextInput = (props) => {
    /* Check for the invaid values for the props to control the Rendering of TextInput */
    /* The parent to pass the 'label' and  'text' property to this component */

    /* Lets define the local state that will be used to render the textInput based on the validation of props received from the parent */

    const [bColor, setBColor] = useState('');

    const submit = () => {
        /* EMit the data back to parent after Processing */
        props.emitData(props.text.toUpperCase());
    };


    /* Control the rendering of the child based on the valid state of the data received from parent */

    if(props.text === undefined || props.text.length === 0){
        return (
            <View>
                <Text>{props.label}</Text>
                <TextInput value={props.text} style={{backgroundColor:'red'}}/>
                <Button title="Submit" disabled={true}/>  
            </View>

        );
    } else {
        return (
            <View>
                <Text>{props.label}</Text>
                <TextInput value={props.text} style={{backgroundColor:'grey'}}/>
                <Button title="Submit" onPress={submit}/>  
            </View>
        );
    }

   
};

export default SmartTextInput;
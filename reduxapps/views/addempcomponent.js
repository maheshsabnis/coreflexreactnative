/* eslint-disable prettier/prettier */
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "../../uiapps/styles";
import { useState } from "react";

/* Use the Dispatcher Hook to dispatch an action */

import { addEmp } from "../actions";
import { useDispatch } from "react-redux";


const AddEmpComponent = () => {
     const [emp,setEmp] = useState({EmpNo:'0',EmpName:''});
     /* define a dispatch object */
     const dispatch = useDispatch();
     const saveEmp = () => {
        /* dispatch addEmp action by passing the 'emp' object to it */
        dispatch(addEmp(emp));
     };
    return (
        <View style={styles.container}>
            <Text style={styles.text}>EmpNo</Text>
            <TextInput style={styles.textInput}
              value={emp.EmpNo}
              onChangeText={text=>setEmp({...emp, EmpNo:text})}
             />
              <Text style={styles.text}>EmpName</Text>
            <TextInput style={styles.textInput}
              value={emp.EmpName}
              onChangeText={text=>setEmp({...emp, EmpName:text})}
             />
             <Button title="Save Emp" onPress={saveEmp}/>
        </View>
    );
};

export default AddEmpComponent;
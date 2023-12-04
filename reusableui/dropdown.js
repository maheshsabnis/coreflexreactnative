/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { isValidElement, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

const Dropdown = (props) => {
    /* The local state that will be used to decide if the Drodown can be expended */
    const [isVisible, setVisibility] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const expand = () => setVisibility(!isVisible);
    
    const selectedValue = (v) => {
        
        setSelectedOption(v);
        props.selectedOption(v);
        /* Collapse the View which is showing options */
        setVisibility(false);
       
    };


    if(props.collection === undefined || props.collection.length === 0){
        return <View style={{backgroundColor:'red'}}> No data to Show</View>
    }

    return (
        <View style={styles.ddlView}>
            <TouchableOpacity style={styles.ddlHeader} onPress={expand}>
                <Text style={styles.textHeader}>{selectedOption||props.title }</Text>
            </TouchableOpacity>
            {
                isVisible && <View style={styles.viewDdlOptions}>
                    {
                        props.collection.map((opt,idx)=>(
                            <TouchableOpacity style={styles.ddlOptionItems} key={idx}
                              onPress={()=>selectedValue(opt)}
                            >
                                <Text>{opt}</Text>
                            </TouchableOpacity>
                        ))
                    }
                </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    ddlView : {
        width: '100%',
        backgroundColor: 'grey'
    },
    ddlHeader : {
        width: '100%',
        backgroundColor: 'grey'
    },
    textHeader: {
        fontSize: 15,
        color: 'yellow',
        fontFamily: 'Segoe UI'
    },
    viewDdlOptions : {
        width: '100%'
    },
    ddlOptionItems : {
        width: '100%',
        fontFamily: 'Times New Roman',
        color: 'black',
        backgroundColor: 'grey'
    }
});
export default Dropdown;
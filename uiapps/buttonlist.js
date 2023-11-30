/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable no-unused-vars */
import { Button, StyleSheet, Text, View } from 'react-native'

const ButtonList = (props) => {

    const emitValue = (val) => {
        /* Emit value from Child to Parent */
        props.selectedValue(val);
    };

    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <View style={styles.container} >
            {
                props.collection.map((c,idx)=>(
                    <Button title={c} key={idx}
                     style={styles.button}
                     onPress={()=>emitValue(c)}
                    />
                ))
            }
        </View>
    )
  
}

const styles = StyleSheet.create({
    container : {
        width: '100%',
        justifyContent: 'center',
        height: 30
    },
    button : {
        fontFamily: 'Times New Roman',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'black'
    }
});

export default ButtonList;

/* eslint-disable no-trailing-spaces */
/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {View, Modal, Button, Text, StyleSheet, Alert} from 'react-native';
const RNModalComponent = () => {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <View style={styles.view}>
      <Text>Click Here to Show Modal Dialog</Text>
      <Button title="Show" onPress={()=>setShowDialog(true)} />
      <Modal 
        animationType='slide'
        transparent={true}
        visible={showDialog}
        onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setShowDialog(!showDialog);
          }}
           
         >
            <View style={styles.centeredView}>
                <Text>Hello I Am Modal</Text>
                <Button title='Close'
                onPress={()=>setShowDialog(!showDialog)}
                />
            </View>
            
         </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'azure',
  },
  text: {
    fontFamily: 'Segoe UI',
    fontSize: 15,
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modal :{
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});

export default RNModalComponent;

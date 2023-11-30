/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import {Text, View, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {styles} from './styles';

const StorageComponent = () => {
    /* async means the method has a PROMISE based call
       1. External HTTP
       2. Local Service Access, Storage, Camera, Contact, etc.

       Each 'async' block MUST have an 'await'able statement for Asynchronous Execution
    */
    const setData = async () => {
         await AsyncStorage.setItem('mykey', 'The Data in Async Storage');
    };

    const getData = async () => {
        let data = await AsyncStorage.getItem('mykey');
        Alert.alert(`Data in Storage = ${data}`);
        let keys = await AsyncStorage.getAllKeys();
        Alert.alert(`All Keys  : ${JSON.stringify(keys)}`);

         
    }
    const clearKeys = async () => {
        await AsyncStorage.clear();
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}> The Async Storage Access </Text>
        <Button title="Set Data" onPress={setData} />
        <Button title="Get Data" onPress={getData} />
        <Text style={styles.text}>Press the Below Button to Read All Keys</Text>
        <Button title="Clear " onPress={clearKeys} />
      </View>
    );
}

export default StorageComponent;

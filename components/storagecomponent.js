/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const StorageComponent = () => {
  const setData = async () => {
    await AsyncStorage.setItem('data', 'I am in AsyncStorage');
    
  }; 
  const getData = async () => {
    const userData = await AsyncStorage.getItem("data");
    Alert.alert(`Data from Storage ${userData}`);
    
  };  
  return (
     <View style={styles.view}>
        <Text style={{fontSize:10, color: 'red'}}>
             The Async Store Demo
        </Text>
        <Button title='Set Data' onPress={setData}></Button>
        <Button title='Get Data' onPress={getData}></Button>
        
     </View>
  );
}

const styles =  StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: 'lightyellow'
    }
});

export default StorageComponent;

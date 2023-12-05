import React, {useEffect} from 'react';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';
import { styles } from './styles';

const BackHandlerComponent = () => {
  useEffect(() => {
    const backAction = () => {
      /* Show the Alert window */
       /* Cancel  to cancel the back and continue with the current Execution*/
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        /* If Yes is clicked the exit the app */
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
  /* Subscribing to the 'hardwareBackPress' event an invoke the backAction() */
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    /* Once the App is exited please release the Native-Event Subscription */  
    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click Back button!</Text>
    </View>
  );
};

export default BackHandlerComponent;

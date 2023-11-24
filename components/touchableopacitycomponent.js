import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
const TouchableOpacityComponent = () => {
  const [counter, setCounter] = useState(0);
  const increament = () => {
    setCounter(ct => ct + 1);
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Using TouchableOpacity</Text>
      <Text style={styles.text}>Count: {counter}</Text>
      <TouchableOpacity style={styles.button} onPress={increament}>
        <Text style={styles.text}>Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'lightgreen',
  },
  text: {
    fontFamily: 'Segoe UI',
    alignContent: 'center',
  },
  button: {
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
  },
});
export default TouchableOpacityComponent;

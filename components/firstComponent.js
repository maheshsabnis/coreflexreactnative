/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert, TextInput} from 'react-native';
const FirstComponent = () => {
  /* Define the State */
  const [name, setName] = useState('');
  /* Method */
  const clickMe = () => {
    Alert.alert('The Button is Pressed');
  };
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Hello!!World</Text>
      <Text style={styles.text}>Enter Your Name:</Text>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        style={styles.textInput}
      />
      <Button title="Click Me" style={styles.button} onPress={clickMe} />
      <Text style={styles.text}>
         You Entered Name as: {name}
      </Text>
    </View>
  );
};

/* Define a Stylesheet */

const styles = StyleSheet.create({
  view: {
    flex: 1 /* Occupy the rendering space in the device dimensions */,
    backgroundColor: 'azure',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
  },
  button: {
    height: 200,
    width: 200,
  },
  textInput: {
    height: 80,
    fontFamily: 'Time New Roman',
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'red',
    color: 'yellow',
  },
});

export default FirstComponent;

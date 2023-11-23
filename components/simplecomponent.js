import React, {useState} from 'react';
import {View, Text, TextInput, StyleProp, StyleSheet} from 'react-native';
const SimpleComponent = () => {
  const [name, setName] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <Text>ENter NAme Here:</Text>
      <TextInput
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <Text style={styles.text}>Entered Name: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontFamily: 'Times New Roman',
  },
  textInput: {
    fontSize: 15,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    height: 90,
  },
});

export default SimpleComponent;

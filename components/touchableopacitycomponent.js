import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
const TouchableOpacityComponent = () => {
  const [counter, setCounter] = useState(0);
  const increament = () => {
    setCounter(ct => ct + 1);
  };
  /* require('./../imgs/first.png') */
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Using TouchableOpacity</Text>
      <Text style={styles.text}>Count: {counter}</Text>
      <TouchableOpacity style={styles.button} onPress={increament}>
        <Text style={styles.text}>Click</Text>
        <ActivityIndicator />
      </TouchableOpacity>
      <ImageBackground
        source={require('./../imgs/first.png')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
      <ActivityIndicator />
    <ActivityIndicator size="large" />
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
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

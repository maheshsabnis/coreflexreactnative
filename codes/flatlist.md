import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const FlatListBasics = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default FlatListBasics;
/* Dynamic */

/* eslint-disable */
import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {Posts} from '../models/data';
const FlatListComponent = () => {
  const [posts, setPosts] = useState(Posts);
  return (
    <View style={styles.container}>
      <FlatList
          data={posts}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text>
            {item.heading}, {item.topic}
            </Text>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  text: {
    fontSize: 10,
    fontFamily: 'Times New Roman',
  },
});

export default FlatListComponent;

/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TextInput, FlatList, StyleSheet, Button, Alert, Image, ScrollView } from 'react-native';
import { Products } from '../models/data';

const ListComponent = () => {
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState(Products);
  const allProducts = Products;


  const filterText = (text) => {
      if (text.length !== 0 || text !== undefined) {
      const filteredData = allProducts.filter(prd => {
         return prd.Cat === text;
      }); 
      Alert.alert(JSON.stringify(filteredData));
      setProducts(filteredData);
    } else {
        setProducts(allProducts);
    }
  };
  return (
     <View style={styles.view}>
        <Text style={styles.text}>Enter Search String</Text>
        <TextInput style={styles.textInput}
         value={searchText}
         autoCapitalize={true}
         onChangeText={text => setSearchText(text)}
        //  onBlur={()=>filterText(searchText)}
         onEndEditing={(evt) => filterText(evt.nativeEvent.text)}
         />
         <Button title='Filter'
           onPress={()=> filterText(searchText)}
         ></Button>
         <FlatList 
           data={products}
           keyExtractor={({id})=> id}
           renderItem={({item}) => (
            <Text style={styles.textItem}>
                {item.Id} {item.Name} {item.Cat} 
                <Image source={require('./../imgs/first.png')}
                  style={styles.img}
                />
            </Text>
           
           )} 
         />
         <Image source={require('./../imgs/first.png')}
           style={styles.img}/>
     </View>
  );
}
const styles = StyleSheet.create({
    view: {
        flex: 2,
        backgroundColor: 'azure'
    },
    text: {
        height: 40,
        fontFamily: 'Times New Roman',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    },
    textItem: {
        height: 20,
        fontFamily: 'Times New Roman',
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red',
        backgroundColor: 'cyan'
    },
    textInput: {
        height: 40,
        fontFamily: 'Times New Roman',
        fontSize: 10,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        color: 'red'
    },
    img: {
        height: 20,
        width: 20,
    }
});

export default ListComponent;

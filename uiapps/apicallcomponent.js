/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { View, Text, Button, ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import { styles } from "./styles";
import { HttpService } from "../services/httpservice";


const ApiCallComponent = () => {
    const [categories, setCategories] = useState([]);
    const [isCompleted,setIsCompleted] = useState(false); 

    const serv = new HttpService();

    /* get data post  mountine of the component */

    useEffect(()=>{
        serv.getCategories()
            .then((resp)=>{
                /* Get the data from the API Call */
                setCategories(resp.data);
                /* The call is completed */
                setIsCompleted(true);
            }).catch((error)=>{

            });
    },[categories]); /* The dependency Parameter */

    /* Method for POST */
    const save = () =>{
        let cat = {"CategoryId":2001,"CategoryName":"Cat-2001","BasePrice":4000};

        serv.postCategory(cat)
            .then((resp)=>{
                // Add the newly created record 
                // in the array
                setCategories([...categories,resp.data]);
            })
            .catch((error)=>{

            });
    };

    return (
        <View style={styles.container}>
             {
              !isCompleted && <ActivityIndicator/> 
             }   
            <Text style={styles.text}>{JSON.stringify(categories)}</Text>
            <Button title="Add Category"
            onPress={save}
            ></Button>
        </View>
    );
};

export default ApiCallComponent;
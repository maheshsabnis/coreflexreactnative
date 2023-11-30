/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View, Text } from "react-native";
import ButtonList from "./buttonlist";
import { styles } from "./styles";
import { useState } from "react";
const UtilizerComponent = () => {

    const [character, setCharacter] = useState('');
    const [actor, setActor] = useState('')

    const characters = [
        'Indiana Jones',
        'Jack Reacher',
        'Ethan Hunt',
        'James Bond',
        'Jason Bourn'
    ];
    const actors = [
        'Tom Cruise',
        'Daniel Craig',
        'To,m Hanks',
        'Andrew Garfield',
        'Morgan Freeman'
    ];
    return (
        <View style={{flex:1}}>
            <View style={{flex:2, backgroundColor: 'yellow'}}>
                <Text>List of Characters</Text>
                <ButtonList collection={characters}
                  selectedValue={(v)=>setCharacter(v)}
                />
                <Text style={styles.text}>
                    Selected Value : {character}
                </Text>
            </View>
            <View style={{flex:3, backgroundColor: 'red'}}>
                <Text>List of Actors</Text>
                <ButtonList collection={actors}
                selectedValue={(v)=>setActor(v)}
                />
                <Text style={styles.text}>
                    Selected Value : {actor}
                </Text>
            </View>
        </View>
    );
};

export default UtilizerComponent;


import React, { useState } from 'react';
import { TextInput, Button, View, Text, ScrollView } from 'react-native';
import OurPanel from '../components/OurPanel';

function HomeScreen({ navigation }) {
    
    const [text, setText] = useState('');
    const [info, setInfo] = useState('');
    const [info2, setInfo2] = useState(2);
    const [showPanel, setShowPanel] = useState(true);
    const [myArray, setMyArray] = useState(['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5', 'Elemento 6']);

    

    const removeCell = (title) =>{
        console.log("removeCell with title: " + title);
        setMyArray(currentArray => currentArray.filter(item => item !== title));
    }

    const myFunction2 = (info) =>{
        console.log("myFunction2: " + info);
        setInfo("myFunction2: " + info);
    }

    return (
    <View>
        <Text>TITLE ...</Text>
        <ScrollView style={{height:"25%"}}>
            {myArray.map((item, index) => (
                <OurPanel key={index} title={item}  removeCell={removeCell}/>
            ))}
        </ScrollView>
        

        <Text>{info}</Text>
       
        <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: '80%' }}
        onChangeText={setText}
        value={text}
        />

        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', { text, info2 })}
        />

        
    </View>
    );
}

export default HomeScreen;
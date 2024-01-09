
import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import OurPanel from '../components/OurPanel';

function HomeScreen({ navigation }) {
    const [text, setText] = useState('');
    const [info, setInfo] = useState('');
    const [info2, setInfo2] = useState(2);
    const [showPanel, setShowPanel] = useState(true);

    const myFunction1 = () =>{
        console.log("myFunction1");
        setShowPanel(false);
    }

    const myFunction2 = (info) =>{
        console.log("myFunction2: " + info);
        setInfo("myFunction2: " + info);
    }
    return (
    <View>
        {showPanel &&<OurPanel title='HOla' subtitle= 'Adeu' function1={myFunction1} function2={myFunction2}/>}
        
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
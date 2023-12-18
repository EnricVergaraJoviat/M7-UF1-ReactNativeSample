
import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import OurPanel from '../components/OurPanel';

function HomeScreen({ navigation }) {
    const [text, setText] = useState('');
    const [info2, setInfo2] = useState(2);

    return (
    <View>
        <OurPanel title='HOla' subtitle= 'Adeu'/>
        
        <Text>Home Screen</Text>
       
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
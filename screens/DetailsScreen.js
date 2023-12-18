import React from 'react';
import { Button, View, Text } from 'react-native';

function DetailsScreen({route, navigation}) {
    const { text, info2 } = route.params;
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Texto recibido: {text + info2}</Text>
            <Button
            title="Go to View 3"
            onPress={() => navigation.navigate('View3')}
        />
        </View>
        
    );
}

  export default DetailsScreen;
  
import React from 'react';
import { Button, View, Text } from 'react-native';

function OurPanel({title, subtitle}) {
    
    return (
        <View style={{backgroundColor: "#FF00F1", width: '80%'}}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
        </View>
    );
}

  export default OurPanel;
  
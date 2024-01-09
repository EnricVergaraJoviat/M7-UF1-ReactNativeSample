import React from 'react';
import { Button, View, Text } from 'react-native';

function OurPanel({title, subtitle, function1, function2}) {
    
    return (
        <View style={{backgroundColor: "#FF00F1", width: '80%'}}>
            <Text>{title}</Text>
            <Text>{subtitle}</Text>
            <Button
                title="Action1"
                onPress={function1}
            />
            <Button
                title="Action2_1"
                onPress={()=>function2("Acció 2.1")}
            />
            <Button
                title="Action2_2"
                onPress={()=>function2("Acció 2.2")}
            />
        </View>
    );
}

  export default OurPanel;
  
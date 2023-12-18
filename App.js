import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa tus pantallas
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import View3 from './screens/View3';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="View3" component={View3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

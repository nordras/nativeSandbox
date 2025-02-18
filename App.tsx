import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/pages/Greetings';
import NewPage from './src/pages/NewPage';
import Standard from './src/pages/Standard';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewPage" component={NewPage} />
        <Stack.Screen name="Standard" component={Standard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

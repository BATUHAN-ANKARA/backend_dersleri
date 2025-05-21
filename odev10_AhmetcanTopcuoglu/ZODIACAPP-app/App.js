import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ZodiacScreen from './screens/ZodiacScreen';  
import HoroscopeScreen from './screens/HoroscopeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Zodiac" component={ZodiacScreen} />
        <Stack.Screen name="Horoscope" component={HoroscopeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

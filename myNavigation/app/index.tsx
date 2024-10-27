import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contacts from '@/src/pages/Contacts';
import Information from '@/src/pages/Information';
import Home from '@/src/pages/Home';

const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();

const Tabs = () => {
  return(
    <Tab.Navigator>
      <Tab.Screen name='home' component={Home} />
      <Tab.Screen name='contacts' component={Contacts} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
  //<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='home' component={Tabs} />
        <Stack.Screen name='information' component={Information} />
      </Stack.Navigator>
  //</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
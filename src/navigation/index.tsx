import React, {FC} from 'react';
import {View, Text, ImageComponent} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../pages/homeScreen/index';
import Launches from '../pages/launches/index';

const Stack = createStackNavigator();
const MyStack: FC = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'SpaceX'}}
      />
      <Stack.Screen
        name="Launches"
        component={Launches}
        options={{title: 'Launches'}}
      />
    </Stack.Navigator>
  );
};
export default MyStack;

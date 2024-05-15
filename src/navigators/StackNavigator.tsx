import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {TabNavigator1} from './TabNavigator1';
import {TabNavigator2} from './TabNavigator2';
import {TabNavigator3} from './TabNavigator3';

const Stack = createStackNavigator();

interface StackNavigatorProps {}

export const RootStack = (props: StackNavigatorProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Animated Bottom Tabs'}}
      />
      <Stack.Screen
        name="TabNavigator1"
        component={TabNavigator1}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigator2"
        component={TabNavigator2}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TabNavigator3"
        component={TabNavigator3}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

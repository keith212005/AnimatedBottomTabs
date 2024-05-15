import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Home} from '../screens/Home';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

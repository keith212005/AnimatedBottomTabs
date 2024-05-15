import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

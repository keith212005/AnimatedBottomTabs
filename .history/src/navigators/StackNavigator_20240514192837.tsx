import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

interface StackNavigatorProps {}

export const AppContainer = (props: StackNavigatorProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

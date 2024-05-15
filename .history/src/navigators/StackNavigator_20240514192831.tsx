import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

interface StackNavigatorProps {}

export const AppContainer = (props: StackNavigatorProps) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DrawerNavigator" component={Home} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

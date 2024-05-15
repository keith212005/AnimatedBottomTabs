import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabScreen1} from '../screens/TabScreen1';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {}

export const DrawerNavigator = (props: DrawerNavigatorProps) => {
  return (
    <Drawer.Navigator
      screenOptions={{drawerStyle: {width: Dimensions.get('window').width}}}>
      <Drawer.Screen name="TabScreen1" component={TabScreen1} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

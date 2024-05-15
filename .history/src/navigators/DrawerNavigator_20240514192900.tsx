import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {}

export const DrawerNavigator = (props: DrawerNavigatorProps) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AnimatedTab1" component={AnimatedTab1} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

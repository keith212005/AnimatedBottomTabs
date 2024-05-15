import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {}

export const DrawerNavigator = (props: DrawerNavigatorProps) => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="AnimatedTab1" component={AnimatedTab1} />
      <Drawer.Screen name="AnimatedTab2" component={AnimatedTab2} />
      <Drawer.Screen name="AnimatedTab3" component={AnimatedTab3} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

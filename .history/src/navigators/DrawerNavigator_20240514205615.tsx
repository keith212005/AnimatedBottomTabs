import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Cards} from '../screens/Cards';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Profile} from '../screens/Profile';
import {CustomDrawerContent} from './CustomDrawerContent';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: Dimensions.get('window').width},
        headerShown: true,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Screen1" component={Screen1} />
      <Drawer.Screen name="Screen2" component={Screen2} />
      <Drawer.Screen name="Screen3" component={Screen3} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

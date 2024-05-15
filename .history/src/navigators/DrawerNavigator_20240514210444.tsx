import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Cards} from '../screens/Cart';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Profile} from '../screens/Profile';
import {CustomDrawerContent} from './CustomDrawerContent';
import {Home} from '../screens/Home';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: Dimensions.get('window').width},
        headerShown: true,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Products" component={Products} />
      <Drawer.Screen name="Favourites" component={Favourites} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

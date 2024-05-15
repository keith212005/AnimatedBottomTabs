import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Profile} from '../screens/Profile';
import {CustomDrawerContent} from './CustomDrawerContent';
import {BottomTabNavigator} from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: Dimensions.get('window').width},
        headerShown: true,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

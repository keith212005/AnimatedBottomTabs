import * as React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawerContent} from './CustomDrawerContent';
import {TabNavigator1} from './TabNavigator1';
import {TabNavigator2} from './TabNavigator2';
import {TabNavigator3} from './TabNavigator3';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = ({navigation}: any) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width: Dimensions.get('window').width},
        headerShown: true,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="TabNavigator1"
        component={TabNavigator1}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="TabNavigator2"
        component={TabNavigator2}
      />
      <Drawer.Screen
        options={{headerShown: false}}
        name="TabNavigator3"
        component={TabNavigator3}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

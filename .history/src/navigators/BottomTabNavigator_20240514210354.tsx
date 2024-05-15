import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Home} from '../screens/Home';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cards} from '../screens/Cart';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Products" component={Favourites} />
        <Tab.Screen name="Products" component={Cards} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

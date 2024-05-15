import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Group>
        <Tab.Screen name="Products" component={Products} />
        <Tab.Screen name="Products" component={Favourites} />
        <Tab.Screen name="Products" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

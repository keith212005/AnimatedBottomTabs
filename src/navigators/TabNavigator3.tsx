import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '../components/BottomTabs/CustomBottomTab';

const Tab = createBottomTabNavigator();

export const TabNavigator3 = () => {
  return (
    <View>
      <Text>Tab Bar 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

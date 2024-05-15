import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '../components/BottomTabs/CustomBottomTab';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group>
        <Tab.Screen
          options={{tabBarLabel: 'Home'}}
          name="Products"
          component={Products}
        />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Group>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {},
});

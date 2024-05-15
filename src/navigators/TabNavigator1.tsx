import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '../components/BottomTabs/CustomBottomTab';
import Icon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export const TabNavigator1 = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="chevron-left" size={24} color="blue" />
            <Text>Back</Text>
          </TouchableOpacity>
        ),
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Group
        screenOptions={
          {
            // headerLeft: () => (
            //   <Button onPress={() => {}} title="Info" color="red" />
            // ),
          }
        }>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            // headerLeft: () => (
            //   <Button onPress={() => {}} title="Info" color="red" />
            // ),
          }}
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

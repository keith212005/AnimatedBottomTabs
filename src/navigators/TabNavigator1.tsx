import * as React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Products} from '../screens/Products';
import {Favourites} from '../screens/Favourites';
import {Cart} from '../screens/Cart';
import {Profile} from '../screens/Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CustomBottomTab} from '../components/BottomTabs/CustomBottomTab';
import Icon from '../components/Icons';
import {Icons} from '../components/Icons';

const Tab = createBottomTabNavigator();

export const TabNavigator1 = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerLeft: () => (
          <Icon
            type={Icons.Entypo}
            name={'chevron-left'}
            size={24}
            color={'black'}
            style={{marginLeft: 10}}
            onPress={() => navigation.goBack()}
          />
        ),
        headerRight: () => (
          <Icon
            type={Icons.Entypo}
            name={'dots-three-vertical'}
            size={24}
            color={'black'}
            style={{marginRight: 20}}
          />
        ),
      }}
      tabBar={props => <CustomBottomTab {...props} />}>
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

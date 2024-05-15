import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawerContent = ({navigation}: any) => {
  return (
    <DrawerContentScrollView>
      <Text style={styles.title}>Drawer Navigator</Text>
      <DrawerItem
        label="Tab Bar 1"
        onPress={() => {
          navigation.navigate('Products');
        }}
      />
      <DrawerItem
        label="Tab Bar 2"
        onPress={() => {
          navigation.navigate('TabNavigator2');
        }}
      />
      <DrawerItem
        label="Tab Bar 3"
        onPress={() => {
          navigation.navigate('TabNavigator3');
        }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

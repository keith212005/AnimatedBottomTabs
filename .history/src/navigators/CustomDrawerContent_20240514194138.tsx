import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

interface CustomDrawerContentProps {}

export const CustomDrawerContent = (props: CustomDrawerContentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Help" onPress={() => {}} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

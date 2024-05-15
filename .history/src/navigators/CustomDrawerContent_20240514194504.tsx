import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawerContent = ({navigation}: any) => {
  React.useEffect(() => {
    navigation.openDrawer();
  });
  return (
    <DrawerContentScrollView>
      <Text>Drawer Navigator</Text>
      <DrawerItem
        label="Tab 1"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Tab 1"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
      <DrawerItem
        label="Tab 1"
        onPress={() => {
          navigation.closeDrawer();
        }}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

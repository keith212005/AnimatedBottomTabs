import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

export const CustomDrawerContent = ({navigation}: any) => {
  React.useEffect(() => {});
  return (
    <DrawerContentScrollView>
      <DrawerItem
        label="Help"
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

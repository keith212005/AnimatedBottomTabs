import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

interface DrawerNavigatorProps {}

export const DrawerNavigator = (props: DrawerNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>DrawerNavigator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

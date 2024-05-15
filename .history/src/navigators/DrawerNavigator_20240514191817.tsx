import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface DrawerNavigatorProps {}

const DrawerNavigator = (props: DrawerNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>DrawerNavigator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

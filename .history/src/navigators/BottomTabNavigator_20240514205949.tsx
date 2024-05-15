import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface BottomTabNavigatorProps {}

const BottomTabNavigator = (props: BottomTabNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>BottomTabNavigator</Text>
    </View>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  container: {},
});

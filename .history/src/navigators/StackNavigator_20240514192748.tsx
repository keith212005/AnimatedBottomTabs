import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

interface StackNavigatorProps {}

export const StackNavigator = (props: StackNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>StackNavigator</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

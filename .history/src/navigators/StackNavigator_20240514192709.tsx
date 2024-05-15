import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

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

import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface StackNavigatorProps {}

const StackNavigator = (props: StackNavigatorProps) => {
  return (
    <View style={styles.container}>
      <Text>StackNavigator</Text>
    </View>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({
  container: {},
});

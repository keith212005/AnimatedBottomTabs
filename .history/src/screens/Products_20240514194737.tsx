import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Screen2Props {}

export const Screen2 = (props: Screen2Props) => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

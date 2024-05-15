import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface TabScreen1Props {}

export const Screen1 = (props: TabScreen1Props) => {
  return (
    <View style={styles.container}>
      <Text>TabScreen1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

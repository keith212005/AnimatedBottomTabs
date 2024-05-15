import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Screen2Props {}

const Screen2 = (props: Screen2Props) => {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {},
});

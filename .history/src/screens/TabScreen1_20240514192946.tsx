import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface TabScreen1Props {}

const TabScreen1 = (props: TabScreen1Props) => {
  return (
    <View style={styles.container}>
      <Text>TabScreen1</Text>
    </View>
  );
};

export default TabScreen1;

const styles = StyleSheet.create({
  container: {},
});

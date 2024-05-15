import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Screen3Props {}

export const Favourites = (props: Screen3Props) => {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

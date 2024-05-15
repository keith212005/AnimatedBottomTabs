import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProfileProps {}

export const Profile = (props: ProfileProps) => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

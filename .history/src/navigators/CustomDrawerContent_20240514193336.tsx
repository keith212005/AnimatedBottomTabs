import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CustomDrawerContentProps {}

export const CustomDrawerContent = (props: CustomDrawerContentProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomDrawerContent</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

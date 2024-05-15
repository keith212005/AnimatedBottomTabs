import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface CustomDrawerContentProps {}

const CustomDrawerContent = (props: CustomDrawerContentProps) => {
  return (
    <View style={styles.container}>
      <Text>CustomDrawerContent</Text>
    </View>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {},
});

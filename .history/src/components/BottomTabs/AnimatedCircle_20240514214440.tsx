import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

type CircleProps = {
  circleX: Animated.SharedValue<number>;
};
export const AnimatedCircle = () => {
  return (
    <View style={styles.container}>
      <Text>AnimatedCircle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

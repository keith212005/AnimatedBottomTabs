import {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';
import Colors from '../../constants/Colors';

type CircleProps = {
  circleX: Animated.SharedValue<number>;
};

const circleContainerSize = 50;
export const AnimatedCircle: FC<CircleProps> = ({circleX}) => {
  const circleContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: circleX.value - circleContainerSize / 2}],
    };
  });

  return <Animated.View style={[styles.container, circleContainerStyle]} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -circleContainerSize / 1.1,
    width: circleContainerSize,
    borderRadius: circleContainerSize,
    height: circleContainerSize,
    backgroundColor: Colors.darkOrange,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

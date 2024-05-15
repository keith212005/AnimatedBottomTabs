import {FC} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Animated, {useAnimatedStyle} from 'react-native-reanimated';

type CircleProps = {
  circleX: Animated.SharedValue<number>;
};

const circleContainerSize = 50;
export const AnimatedCircle: FC<CircleProps> = ({circleX}) => {

    const circleContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateX: circleX.value - circleContainerSize / 2}],[]
        }
    })

  return (
    <View style={styles.container}>
      <Text>AnimatedCircle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

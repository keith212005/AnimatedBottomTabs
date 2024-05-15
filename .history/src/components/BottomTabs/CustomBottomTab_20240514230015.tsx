import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import Animated, {
  runOnJS,
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {interpolatePath} from 'react-native-redash';
import {SCREEN_WIDTH} from '../../constants/Screen';
import {usePath} from '../../hooks/usePath';
import {getPathXCenter} from '../../utils/Path';
import {TabItem} from './TabItem';
import {AnimatedCircle} from './AnimatedCircle';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const AnimatedPath = Animated.createAnimatedComponent(Path);

export const CustomBottomTab: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {containerPath, curvedPaths, tHeight} = usePath();
  const circleXCoordinates = useSharedValue(0);
  const progress = useSharedValue(1);
  const handleMoveCircle = (currentPath: string) => {
    circleXCoordinates.value = getPathXCenter(currentPath);
  };
  const selection = (routeName: string) => {
    switch (routeName) {
      case 'Products':
        return 'Home';
      case 'Cart':
        return 'shopping-bag';

      default:
        break;
    }
  };
};

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
        return 'home';
      case 'Cart':
        return 'shopping-bag';
      case 'Favourites':
        return 'star';
      case 'Profile':
        return 'user';
      default:
        return 'home';
    }
  };

  const animatedProps = useAnimatedProps(() => {
    const currentPath = interpolatePath(
      progress.value,
      Array.from({length: curvedPaths.length}).map((_, index) => index + 1),
      curvedPaths,
    );
    runOnJS(handleMoveCircle)(currentPath);
    return {
      d: `${containerPath} ${currentPath}`,
    };
  });

  const handleTabPress = (index: number, tab: string) => {
    navigation.navigate(tab);
    progress.value = withTiming(index);
  };

  return (
    <View style={styles.tabBarContainer}>
      <Svg width={SCREEN_WIDTH} height={tHeight} style={styles.shadowMd}>
        <AnimatedPath animatedProps={animatedProps} fill="black" />
      </Svg>
      <AnimatedCircle circleX={circleXCoordinates} />
      <View style={[styles.tabItemsContainer, {height: tHeight}]}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel ? options.tabBarLabel : route.name;
          return (
            <TabItem
              key={index.toString()}
              label={label as string}
              icon={selection(route.name)}
              index={index}
              activeIndex={state.index + 1}
              onTabPress={() => handleTabPress(index + 1, route.name)}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
  },
});

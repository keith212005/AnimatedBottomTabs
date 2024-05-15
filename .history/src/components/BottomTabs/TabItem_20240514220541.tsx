import {Pressable, StyleSheet, Text, View} from 'react-native';
import {FC, useEffect} from 'react';
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import {getPathXCenterByIndex} from '../../utils/Path';
import {usePath} from '../../hooks/usePath';
import {SCREEN_WIDTH} from '../../constants/Screen';

export type TabProps = {
  label: string;
  icon: string;
  index: number;
  activeIndex: number;
  onTabPress: () => void;
};

const ICON_SIZE = 25;
const LABEL_WIDTH = SCREEN_WIDTH / 4;

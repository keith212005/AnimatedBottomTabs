import React, {FC} from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconLibrary = {
  [key: string]: () => React.ComponentType<any>;
};

const ICON_LIBRARIES: IconLibrary = {
  Feather: () => Feather,
  MaterialCommunityIcons: () => MaterialCommunityIcons,
  // add more as needed
};

export type IconButtonProps = PressableProps & {
  icon: string;
  iconFamily?: 'Feather' | 'MaterialCommunityIcons';
  variant?: 'text' | 'container' | 'outlined';
  size?: 'small' | 'medium' | 'big';
  iconColor?: string;
  roundness?: 'full' | 'medium' | 'small';
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

const IconButton: FC<IconButtonProps> = ({
  icon,
  iconFamily = 'Feather',
  variant = 'contained ',
  size = 'medium',
  iconColor = 'white',
  roundness = 'medium',
  style = {},
  onPress,
  ...rest
}) => {
  const Icon = ICON_LIBRARIES[iconFamily]();
  const iconSize = size === 'big' ? 24 : size === 'medium' ? 16 : 12;
  const buttonSize = size === 'big' ? 48 : size === 'medium' ? 36 : 24;

  const buttonStyle = [
    styles.button,
    styles[`${variant}Button`],
    styles[`${roundness}Roundness`],
    {width: buttonSize, height: buttonSize},
    style,
  ] as StyleProp<ViewStyle>;

  return(
    <Pressable
    {...rest}
  )
};

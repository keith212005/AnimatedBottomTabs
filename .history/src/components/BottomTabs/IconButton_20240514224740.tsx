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

export const IconButton: FC<IconButtonProps> = ({
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

  return <Pressable {...rest} onPress={onPress}
  style={({pressed})=>[
    buttonStyle,
    pressed && styles.buttonPressed
    pressed && styles.shadow
  ]}
  >
    <Icon name={icon} size={iconSize} color={iconColor} />
  </Pressable>;
};

const styles = StyleSheet.create({
    button: {
        borderRadius:40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonPressed:{
        opacity:0.9
    },
    containedButton: {
        backgroundColor: '#2196F3',
    },
    textButton: {
        backgroundColor: 'transparent',
    },
    outlinedButton: {
        backgroundColor: 'transparent',
        borderWidth:1,
        borderColor: '#2196F3',
    },
    fullRoundness: {
        borderRadius: 100,
    },
    mediumRoundness: {
        borderRadius: 20,
    },
    smallRoundness: {
        borderRadius: 10,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
    }
})


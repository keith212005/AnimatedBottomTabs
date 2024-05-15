import React, {FC} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export type IconLibrary = {
  [key: string]: () => React.ComponentType<any>;
};

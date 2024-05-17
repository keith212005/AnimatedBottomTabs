import {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabArr} from '../constants/constants';
import Colors from '../constants/Colors';
import {Icon, Icons} from '../components/Icons';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef: any = useRef(null);
  const textViewRef: any = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={[styles.container, {flex: focused ? 1 : 0.7}]}
      onPress={onPress}
      activeOpacity={1}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View
          style={[
            styles.btn,
            {backgroundColor: focused ? null : item.alphaClr},
          ]}>
          {!focused && (
            <Icon
              type={item.type}
              name={item.activeIcon}
              color={focused ? Colors.white : Colors.primary}
            />
          )}
          <Animatable.View ref={textViewRef}>
            {focused && (
              <View
                style={[
                  styles.btn,
                  {backgroundColor: focused ? null : item.alphaClr},
                ]}>
                <Icon
                  type={item.type}
                  name={item.activeIcon}
                  color={focused ? Colors.white : Colors.primary}
                />
                <Text style={{color: Colors.white, marginLeft: 5}}>
                  {item.label}
                </Text>
              </View>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const TabNavigator3 = ({navigation}: any) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 10,
          right: 16,
          left: 16,
          borderRadius: 16,
          backgroundColor: Colors.white,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.2,
          shadowRadius: 3.5,
          marginBottom: Platform.OS === 'ios' ? 20 : 0,
          paddingBottom: Platform.OS === 'ios' ? 5 : 0,
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      {TabArr.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.route}
          component={item.component}
          options={{
            tabBarLabel: item.label,
            tabBarIcon: ({color, focused}) => (
              <Icon
                type={item.type}
                name={focused ? item.activeIcon : item.inactiveIcon}
                size={24}
                color={color}
              />
            ),
            tabBarButton: props => <TabButton {...props} item={item} />,
            headerLeft: () => (
              <Icon
                type={Icons.Feather}
                name={'chevron-left'}
                size={24}
                color={'black'}
                style={{marginLeft: 14}}
                onPress={() => navigation.goBack()}
              />
            ),
            headerRight: () => (
              <Icon
                type={Icons.Entypo}
                name={'dots-three-vertical'}
                size={24}
                color={'black'}
                style={{marginRight: 20}}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});

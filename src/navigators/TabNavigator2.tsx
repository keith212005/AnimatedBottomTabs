import {useEffect, useRef} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabArr} from '../constants/constants';
import Colors from '../constants/Colors';
import {Icon, Icons} from '../components/Icons';
import * as Animatable from 'react-native-animatable';

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: 10},
  0.82: {translateY: -34},
  1: {scale: 1.2, translateY: -20},
};

const animate2 = {
  0: {scale: 1.2, translateY: -20},
  1: {scale: 1, translateY: 10},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.9},
  0.5: {scale: 0.3},
  0.8: {scale: 0.7},
  1: {scale: 1},
};

const circle2 = {
  0: {scale: 1},
  1: {scale: 0},
};

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef: any = useRef(null);
  const circleRef: any = useRef(null);
  const textRef: any = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 0});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={1}>
      <Animatable.View
        ref={viewRef}
        style={styles.container}
        animation={'zoomIn'}
        duration={500}>
        <View style={styles.btn}>
          <Animatable.View
            ref={circleRef}
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: Colors.primary,
              borderRadius: 25,
            }}
          />
          <Icon
            type={item.type}
            name={focused ? item.activeIcon : item.inactiveIcon}
            size={24}
            color={focused ? Colors.white : Colors.primary}
          />
        </View>

        <Animatable.Text
          ref={textRef}
          style={{
            fontSize: 10,
            color: Colors.primary,
            textAlign: 'center',
          }}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export const TabNavigator2 = ({navigation}: any) => {
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
          marginBottom: 20,
          paddingBottom: 10,
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
                style={{marginLeft: 10}}
                onPress={() => navigation.goBack()}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 4,
    borderColor: Colors.white,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

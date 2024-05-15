import * as React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {ListItem, Avatar} from '@rneui/base';

export const Home = ({navigation}: any) => {
  const [expanded, setExpanded] = React.useState(true);
  return (
    <>
      <ListItem.Accordion
        content={
          <ListItem.Content>
            <ListItem.Title>Animated Tabs</ListItem.Title>
          </ListItem.Content>
        }
        isExpanded={expanded}
        onPress={() => setExpanded(!expanded)}>
        <ListItem>
          <ListItem.Content>
            <Pressable onPress={() => navigation.navigate('TabNavigator1')}>
              <ListItem.Title>Tab 1</ListItem.Title>
            </Pressable>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <Pressable onPress={() => navigation.navigate('TabNavigator2')}>
              <ListItem.Title>Tab 2</ListItem.Title>
            </Pressable>
          </ListItem.Content>
        </ListItem>
        <ListItem>
          <ListItem.Content>
            <Pressable onPress={() => navigation.navigate('TabNavigator3')}>
              <ListItem.Title>Tab 3</ListItem.Title>
            </Pressable>
          </ListItem.Content>
        </ListItem>
      </ListItem.Accordion>
    </>
  );
};

const styles = StyleSheet.create({
  container: {},
});

import * as React from 'react';
import {Text, View, StyleSheet, Divider} from 'react-native';
import Papers from '../Screens/Home/Papers';
import Forum from '../Screens/Home/Forum';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationConstant from '../constants/NavigationConstants';

const Tab = createBottomTabNavigator();

const TabRoute = () => {
  const styles = StyleSheet.create({
    tabBar: {
      fontSize: 12,
      color: 'yellow',
    },
  });

  return (
    <Tab.Navigator
      initialRouteName={NavigationConstant.PAPERS}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 2,
          borderRadius: 15,
        },
        headerShown: false,
        tabBarIconStyle: {display: 'none'},
        tabBarLabelStyle: {
          fontSize: 18,
          marginBottom: 15,
        },
      }}>
      <Tab.Screen name={NavigationConstant.PAPERS} component={Papers} />
      <Tab.Screen name={NavigationConstant.FORUM} component={Forum} />
    </Tab.Navigator>
  );
};

export default TabRoute;

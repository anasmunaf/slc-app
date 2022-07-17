import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationConstant from '../constants/NavigationConstants';
import {
  MarkingScheme,
  QuestionPaper,
  YearlyPapers,
} from '../Screens/ByAnnual/A_level';
const Tab = createBottomTabNavigator();
const ALevelPaperCategoryTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationConstant.ALL}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          top: 25,
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
      <Tab.Screen
        name={NavigationConstant.O_LEVEL.ALL}
        component={YearlyPapers}
      />
      <Tab.Screen
        name={NavigationConstant.O_LEVEL.QS}
        component={QuestionPaper}
      />
      <Tab.Screen
        name={NavigationConstant.O_LEVEL.MS}
        component={MarkingScheme}
      />
    </Tab.Navigator>
  );
};

export default ALevelPaperCategoryTab;

import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationConstant from '../constants/NavigationConstants';
import {
  MarkingScheme,
  QuestionPaper,
  YearlyPapers,
} from '../Screens/ByAnnual/O_level';
const Tab = createBottomTabNavigator();
const OLevelPaperCategoryTab = props => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationConstant.ALL}
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          top: 100,
          left: 20,
          right: 20,
          elevation: 4,
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
        children={() => <YearlyPapers {...props} />}
      />
      <Tab.Screen
        name={NavigationConstant.O_LEVEL.QS}
        children={() => <QuestionPaper {...props} />}
      />
      <Tab.Screen
        name={NavigationConstant.O_LEVEL.MS}
        children={() => <MarkingScheme {...props} />}
      />
    </Tab.Navigator>
  );
};

export default OLevelPaperCategoryTab;

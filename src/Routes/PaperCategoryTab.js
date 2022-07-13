import * as React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationConstant from '../constants/NavigationConstants';
import YearlyPapers from '../Screens/ByAnnual/YearlyPapers';
import QuestionPaper from '../Screens/ByAnnual/QuestionPaper';
import MarkingScheme from '../Screens/ByAnnual/MarkingScheme';
const Tab = createBottomTabNavigator();

const PaperCategoryTab = ({route}) => {
  const styles = StyleSheet.create({});

  return (
    <Tab.Navigator
      initialRouteName={NavigationConstant.PAPERS}
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
      <Tab.Screen name={NavigationConstant.ALL} component={YearlyPapers} />
      <Tab.Screen name={NavigationConstant.QS} component={QuestionPaper} />
      <Tab.Screen name={NavigationConstant.MS} component={MarkingScheme} />
    </Tab.Navigator>
  );
};

export default PaperCategoryTab;

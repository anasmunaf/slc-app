import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoute from './TabRoute';
import NavigationConstant from '../constants/NavigationConstants';
import OLevelPaperCategoryTab from './OLevelPaperCategoryTab';
import YearlyPdf from '../components/YearlyPdf';
import {Subjects as OLevelSubjects} from '../Screens/ByAnnual/O_level';
import {Subjects as ALevelSubjects} from '../Screens/ByAnnual/A_level';
import ALevelPaperCategoryTab from './ALevelPaperCategoryTab';
import {
  Subjects as OLevelSubjective,
  TopicFilter,
} from '../Screens/ByTopic/O_level';
const Stack = createNativeStackNavigator();

const Routes = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
        }}>
        <Stack.Screen
          options={{headerShown: false}}
          name={NavigationConstant.TAB}
          component={TabRoute}
        />
        <Stack.Screen
          name={NavigationConstant.A_LEVEL.SUBJECT}
          component={ALevelSubjects}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.O_LEVEL.SUBJECT}
          component={OLevelSubjects}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.O_LEVEL.YEARLY_TAB}
          component={OLevelPaperCategoryTab}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.A_LEVEL.YEARLY_TAB}
          component={ALevelPaperCategoryTab}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.YEARLY_PDF}
          component={YearlyPdf}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.O_LEVEL.SUBJECT_TOPICAL}
          component={OLevelSubjective}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.O_LEVEL.TOPIC_FILTER}
          children={props => <TopicFilter {...props} />}
          options={{
            title: ``,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

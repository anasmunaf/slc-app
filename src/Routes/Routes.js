import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabRoute from './TabRoute';
import NavigationConstant from '../constants/NavigationConstants';
import Subjects from '../Screens/ByAnnual/Subjects';
import PaperCategoryTab from './PaperCategoryTab';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={NavigationConstant.TAB}
          component={TabRoute}
        />
        <Stack.Screen
          name={NavigationConstant.OLEVEL_SUBJECTS}
          component={Subjects}
          options={{
            title: ``,
          }}
        />
        <Stack.Screen
          name={NavigationConstant.OLEVEL_YEARLY}
          component={PaperCategoryTab}
          options={{
            title: ``,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

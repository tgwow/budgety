import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Budget from '../../../../screens/App/Budget';

export type IHomeStack = {
  Home: undefined;
};
const HomeStack = createStackNavigator<IHomeStack>();

const HomeStackScreen = () => (
  <HomeStack.Navigator mode="modal">
    <HomeStack.Screen
      name="Home"
      component={Budget}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);

export default HomeStackScreen;

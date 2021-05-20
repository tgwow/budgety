import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import TabBarIcon from '../../../components/UI/TabBarIcon';
import HomeStackScreen from './HomeStack';

export type ITabStack = {
  HomeStack: undefined;
};

const TabStack = createBottomTabNavigator<ITabStack>();

const TabStackScreen = () => {
  const colorScheme = useColorScheme();
  return (
    <TabStack.Navigator
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <TabStack.Screen
        name="HomeStack"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="trending-up-sharp" color={color} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabStackScreen;

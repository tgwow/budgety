import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import Budget from '../../screens/App/Budget';
import AddTransaction from '../../screens/App/Budget/AddTransaction';
import TabBarIcon from '../../components/UI/TabBarIcon';

export type IAppStack = {
  TabStack: undefined;
  AddTransaction: undefined;
};

export type ITabStack = {
  HomeStack: undefined;
};

export type IHomeStack = {
  Home: undefined;
};

const AppStack = createStackNavigator<IAppStack>();
const TabStack = createBottomTabNavigator<ITabStack>();
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

export default function AppStackScreen() {
  return (
    <AppStack.Navigator initialRouteName="TabStack" mode="modal">
      <AppStack.Screen
        name="TabStack"
        component={TabStackScreen}
        options={{ headerShown: false }}
      />
      <AppStack.Screen
        name="AddTransaction"
        component={AddTransaction}
        options={{ title: '' }}
      />
    </AppStack.Navigator>
  );
}

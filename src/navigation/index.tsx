import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import AuthStack from './Auth';

export type IRootStack = {
  Auth: undefined;
  App: undefined;
};

const Stack = createStackNavigator<IRootStack>();

export const RootStack = () => (
  <Stack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Auth"
  >
    <Stack.Screen name="Auth" component={AuthStack} />
  </Stack.Navigator>
);

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootStack />
    </NavigationContainer>
  );
}

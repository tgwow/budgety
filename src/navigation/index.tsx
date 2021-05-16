import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { ColorSchemeName } from 'react-native';
import { useRecoilValue } from 'recoil';
import AuthStack from './Auth';
import AppStack from './App';
import { isLoggedInState } from '../atom';

export type IRootStack = {
  Auth: undefined;
  App: undefined;
};

const Stack = createStackNavigator<IRootStack>();

export const RootStack = () => {
  const isLoggedIn = useRecoilValue(isLoggedInState);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Auth"
    >
      {isLoggedIn ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : (
        <Stack.Screen name="App" component={AppStack} />
      )}
    </Stack.Navigator>
  );
};

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

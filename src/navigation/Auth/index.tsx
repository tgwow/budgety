import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SignIn from '../../screens/Auth/SignIn';
import SignUp from '../../screens/Auth/SignUp';

export type IAuthStack = {
  SignIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
  // HeadedList: undefined;
};

const Stack = createStackNavigator<IAuthStack>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {/* <Stack.Screen name="HeadedList" component={HeadedList} /> */}
    </Stack.Navigator>
  );
}

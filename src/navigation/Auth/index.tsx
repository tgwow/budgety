import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SignIn from '../../screens/Auth/SignIn';

type IAuthStack = {
  SignIn: undefined;
  SignUp: undefined;
  ForgetPassword: undefined;
};

const Stack = createStackNavigator<IAuthStack>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="SignIn"
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      {/* <Stack.Screen name="SignUp" component={SignIn} /> */}
      {/* <Stack.Screen name="ForgetPassword" component={SignIn} /> */}
    </Stack.Navigator>
  );
}

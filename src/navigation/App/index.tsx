import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { Text } from '../../components/Themed';
import Budget from '../../screens/App/Budget';

export type IAppStack = {
  Budget: undefined;
  Incoming: undefined;
  Outgoing: undefined;
};

const BottomTab = createBottomTabNavigator<IAppStack>();

export default function AppStack() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Budget"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Budget"
        component={Budget}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="trending-up-sharp" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

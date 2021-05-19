import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

type ITabBarIcon = {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
};
const TabBarIcon = (props: ITabBarIcon) => (
  <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />
);

export default TabBarIcon;

import * as React from 'react';

import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { View, ViewProps } from '../../Themed';
import styles from './styles';
import Colors from '../../../constants/Colors';

export type ILoading = {
  color?: string;
} & ViewProps &
  ActivityIndicatorProps;

export default function Loading({
  color = Colors.dark.primary,
  ...rest
}: ILoading) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} {...rest} />
    </View>
  );
}

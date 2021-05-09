import React from 'react';

import { View, ViewProps } from '../../Themed';
import styles from './styles';

export default function Container({ style, children }: ViewProps) {
  return <View style={[style, styles.container]}>{children}</View>;
}

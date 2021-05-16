import React from 'react';

import { ScrollView, ScrollViewProps } from '../../Themed';
import styles from './styles';

export default function ScrollableContainer({
  style,
  contentContainerStyle,
  children,
}: ScrollViewProps) {
  return (
    <ScrollView
      style={[style, styles.container]}
      contentContainerStyle={[contentContainerStyle, styles.contentContainer]}
    >
      {children}
    </ScrollView>
  );
}

import React from 'react';

import { Text, View } from '../../Themed';
import styles from './styles';

export default function StyledInput() {
  return (
    <View style={styles.getStartedContainer}>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Open up the code for this screen:
      </Text>
    </View>
  );
}

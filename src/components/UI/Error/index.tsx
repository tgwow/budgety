import * as React from 'react';

import { Text, TextProps } from '../../Themed';
import TextStyles from '../Text/styles';
import styles from './styles';

export default function StyledError({ style, ...rest }: TextProps) {
  return (
    <Text {...rest} style={[style, TextStyles(1, '400').title, styles.error]} />
  );
}

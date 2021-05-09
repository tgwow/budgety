import * as React from 'react';

import { Text, TextProps } from '../../Themed';
import styles, { IWeight } from './styles';

interface IStyledText extends TextProps {
  level?: number;
  weight?: IWeight;
}

export default function StyledText({
  style,
  level,
  weight,
  ...rest
}: IStyledText) {
  return <Text {...rest} style={[style, styles(level, weight).title]} />;
}

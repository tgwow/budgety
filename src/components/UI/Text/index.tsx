import * as React from 'react';

import { Text, TextProps } from '../../Themed';
import styles, { IWeight } from './styles';

type IStyledText = {
  level?: number;
  weight?: IWeight;
} & TextProps;

export default function StyledText({
  style,
  level,
  weight,
  ...rest
}: IStyledText) {
  return <Text {...rest} style={[style, styles(level, weight).title]} />;
}

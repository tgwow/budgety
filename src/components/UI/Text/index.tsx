import * as React from 'react';

import { Text as ThemedText, TextProps } from '../../Themed';
import styles from './styles';
import { IWeight } from '../../../types';

type IStyledText = {
  level?: number;
  weight?: IWeight;
} & TextProps;

export default function Text({ style, level, weight, ...rest }: IStyledText) {
  return <ThemedText {...rest} style={[style, styles(level, weight).title]} />;
}

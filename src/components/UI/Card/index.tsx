import * as React from 'react';

import { View } from 'react-native';
import { Button, ButtonProps } from '../../Themed';
import Text from '../Text';
import styles from './styles';
import { numberToCurrency } from '../../../utils';
import Colors from '../../../constants/Colors';

type ICard = {
  value: number;
  description: string;
  category: string;
  type: number;
  date: string;
} & ButtonProps;

export default function Card({
  style,
  value,
  description,
  category,
  type,
  date,
  ...rest
}: ICard) {
  return (
    <Button
      {...rest}
      style={[style, styles.card]}
      darkColor={Colors.dark.backgroundContrast}
    >
      <View>
        <Text weight="700">{description}</Text>
        <View style={styles.row}>
          <Text level={1} darkColor={Colors.dark.darkText}>
            {date}
          </Text>
          <Text level={1} darkColor={Colors.dark.darkText} style={styles.tag}>
            {category}
          </Text>
        </View>
      </View>
      <Text
        weight="700"
        style={styles.amount}
        darkColor={type === 1 ? Colors.dark.green : Colors.dark.red}
      >
        {numberToCurrency(value)}
      </Text>
    </Button>
  );
}

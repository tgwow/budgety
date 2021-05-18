import * as React from 'react';

import { View } from 'react-native';
import { Button, ButtonProps } from '../../Themed';
import Text from '../Text';
import styles from './styles';
import { numberToCurrency } from '../../../utils';
import Colors from '../../../constants/Colors';

type ICard = {
  type: string;
  title: string;
  amount: number;
  date: Date;
} & ButtonProps;

export default function Card({
  style,
  type,
  title,
  amount,
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
        <Text weight="700">{title}</Text>
        <View style={styles.row}>
          <Text level={1} darkColor={Colors.dark.darkText}>
            {date.toLocaleDateString()}
          </Text>
          <Text level={1} darkColor={Colors.dark.darkText} style={styles.tag}>
            food
          </Text>
        </View>
      </View>
      <Text
        weight="700"
        style={styles.amount}
        darkColor={type === 'incoming' ? Colors.dark.green : Colors.dark.red}
      >
        {numberToCurrency(amount)}
      </Text>
    </Button>
  );
}

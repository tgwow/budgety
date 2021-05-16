import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { LayoutChangeEvent, TouchableOpacity } from 'react-native';
import { View, ViewProps, Button } from '../../Themed';
import { Text } from '../..';
import Colors from '../../../constants/Colors';

import { styles, footerStyles } from './styles';
import { numberToCurrency } from '../../../utils';

export type IHeader = {
  title: string;
  amount: number;
} & ViewProps;

export default function Header({
  style,
  title = 'Budgets',
  amount = 25.23,
}: IHeader) {
  const [headerHeight, setHeaderHeight] = useState(0);

  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { height } = nativeEvent.layout;
    setHeaderHeight(height);
  };
  return (
    <View style={[style, styles.budget]} darkColor={Colors.dark.primary}>
      <Text level={5} weight="700" style={styles.title}>
        {title}
      </Text>
      <View style={footerStyles(headerHeight).card} onLayout={onLayout}>
        <Text level={4} weight="700" style={styles.amount}>
          {numberToCurrency(amount)}
        </Text>
        <Button style={styles.add}>
          <Ionicons name="add-sharp" size={40} color="white" />
        </Button>
      </View>
    </View>
  );
}

import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

import { LayoutChangeEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { View, ViewProps } from '../../Themed';
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
        <TouchableOpacity style={styles.add}>
          <AntDesign
            name="plus"
            size={30}
            color="white"
            style={{
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

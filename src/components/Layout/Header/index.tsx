import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  CompositeNavigationProp,
  useNavigation,
} from '@react-navigation/native';

import { LayoutChangeEvent } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import { View, ViewProps } from '../../Themed';
import { Switch, Text } from '../../UI';
import Colors from '../../../constants/Colors';

import { styles, footerStyles } from './styles';
import { numberToCurrency } from '../../../utils';
import { IAppStack, IHomeStack, ITabStack } from '../../../navigation/App';

type IHeaderNavigation = CompositeNavigationProp<
  StackNavigationProp<IHomeStack, 'Home'>,
  CompositeNavigationProp<
    BottomTabNavigationProp<ITabStack>,
    StackNavigationProp<IAppStack>
  >
>;

export type IHeader = {
  title: string;
  amount?: number;
  type?: 1 | 0;
  onChangeType?: any;
} & ViewProps;

export default function Header({
  style,
  title,
  amount,
  type,
  onChangeType,
}: IHeader) {
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigation = useNavigation<IHeaderNavigation>();
  const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
    const { height } = nativeEvent.layout;
    setHeaderHeight(height);
  };
  return (
    <View style={[style, styles.container]} darkColor={Colors.dark.primary}>
      <View style={styles.header} darkColor={Colors.dark.primary}>
        <Text level={5} weight="700" style={styles.title}>
          {title}
        </Text>
        {type !== undefined && onChangeType && (
          <Switch
            value={!!type}
            onValueChange={() =>
              onChangeType((prev: boolean) => (prev ? 0 : 1))
            }
          />
        )}
      </View>
      {title === 'Budgets' ? (
        <View style={footerStyles(headerHeight).card} onLayout={onLayout}>
          <Text level={4} weight="700" style={styles.amount}>
            {numberToCurrency(amount)}
          </Text>
          <TouchableOpacity
            style={styles.add}
            onPress={() => navigation.navigate('AddTransaction')}
          >
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
      ) : null}
    </View>
  );
}

import * as React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TextProps, Button } from '../../../Themed';
import Text from '../../Text';
import styles from './styles';
import Colors from '../../../../constants/Colors';

type IFilterItem = {
  label: string;
  active: boolean;
} & TextProps;

export default function FilterItem({
  style,
  label,
  active,
  ...rest
}: IFilterItem) {
  const color = active ? Colors.dark.primary : Colors.dark.backgroundContrast;
  return (
    <TouchableOpacity style={styles(color).button}>
      <Text {...rest} style={[style, styles().label]} weight="700" level={1}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

import * as React from 'react';

import { FlatList } from 'react-native';
import { ViewProps, View } from '../../Themed';
import styles from './styles';
import FilterItem from './FilterItem';

type IFilter = {
  filters: Array<string>;
} & ViewProps;

export default function Filter({ style, filters }: IFilter) {
  return (
    <FlatList
      data={filters}
      style={[style, styles.filter]}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item, index }) => (
        <FilterItem label={item} key={index} active={index === 0} />
      )}
      horizontal
    />
  );
}

import * as React from 'react';

import { FlatList } from 'react-native';
import { ViewProps, View } from '../../Themed';
import styles from './styles';
import FilterItem from './FilterItem';

type IFilter = {
  filters: Array<string>;
  setActiveFilter: any;
  activeFilters: Array<string>;
} & ViewProps;

export default function Filter({
  style,
  filters,
  setActiveFilter,
  activeFilters,
}: IFilter) {
  return (
    <FlatList
      data={filters}
      style={[style, styles.filter]}
      contentContainerStyle={{ paddingBottom: 10, paddingRight: 50 }}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      renderItem={({ item, index }) => (
        <FilterItem
          label={item}
          key={index}
          active={activeFilters.includes(item)}
          onPress={() => setActiveFilter(item)}
        />
      )}
      horizontal
    />
  );
}

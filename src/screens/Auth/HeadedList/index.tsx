import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { View, Text } from '../../../components/Themed';
import { mockData } from './data';
import { styles } from './styles';

export const PullToRefresh = () => (
  <View style={styles.pullToRefresh}>
    <ActivityIndicator color="white" />
  </View>
);

const Tab = ({ item }: any) => (
  <TouchableOpacity>
    <Text style={styles.tab}>{item}</Text>
  </TouchableOpacity>
);

export const Tabs = (props: any) => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator
    style={styles.tabs}
    data={[
      'First',
      'Second',
      'Third',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten',
    ]}
    renderItem={(item) => <Tab {...item} {...props} />}
  />
);

export type ITabState = [string, React.Dispatch<React.SetStateAction<string>>];

export type IListHeader = {
  tabState: ITabState;
};

export const ListHeader = ({ tabState }: IListHeader) => (
  <View style={styles.listHeader}>
    <View style={styles.header}>
      <Text>Header</Text>
    </View>
    <View style={styles.body}>
      <Text>Body</Text>
      <Image source={{ uri: `https://placeimg.com/200/100/any` }} />
    </View>
    <View style={styles.footer}>
      <Tabs tabState={tabState} />
    </View>
  </View>
);

const ListItem = ({ item, index }: any) => (
  <View style={styles.item}>
    <Text style={styles.name}>{item.name}</Text>
    <View>
      <Image
        source={{ uri: `https://placeimg.com/20${index}/150/any` }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  </View>
);

export default function HeadedList() {
  const tabState = useState('First');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator
        data={mockData}
        keyExtractor={({ id }) => id.toString()}
        renderItem={ListItem}
        ListHeaderComponent={() => <ListHeader tabState={tabState} />}
        onEndReached={() => alert('reached end!')}
        onEndReachedThreshold={0.2}
      />
    </SafeAreaView>
  );
}

import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { ActivityIndicator, FlatList } from 'react-native';
import AppLoadingPlaceholder from 'expo/build/launch/AppLoadingPlaceholder';
import { Container, Header, Text } from '../../../components';

import Filter from '../../../components/UI/Filter';
import Card from '../../../components/UI/Card';
import { View } from '../../../components/Themed';

const db = SQLite.openDatabase('db.budgety');

export type ITransaction = {
  id: number;
  value: number;
  description: string;
  type: number;
  category: string;
  date: string;
};

export default function Budget() {
  const [activeFilters, setActiveFilters] = useState(['All']);
  const [data, setData] = useState<Array<ITransaction> | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const filters = [
    'All',
    'Food',
    'Home',
    'Others',
    'Study',
    'Drugs',
    'Leisure',
  ];
  useFocusEffect(
    React.useCallback(() => {
      db.transaction((tx) => {
        tx.executeSql('select * from transactions', [], (row, success) => {
          if (success.rows.length > 0) {
            let tempBalance = 0;
            let updatedData: Array<ITransaction> = [];
            const temp: Array<ITransaction> = [];
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < success.rows.length; i++) {
              temp.push(success.rows.item(i));
              tempBalance += success.rows.item(i).value;
            }
            updatedData = [...temp];
            setData(updatedData);
            setBalance(tempBalance);
          }
        });
      });
      const timeoutId = setTimeout(() => {
        setLoading(false);
      }, 4000);
      return () => clearTimeout(timeoutId);
    }, [])
  );

  const onFilterPressed = (value: string) => {
    const index = activeFilters.indexOf(value);

    let updatedActiveFilters = [...activeFilters];

    if (index === -1) {
      updatedActiveFilters = [...activeFilters, value];
    } else {
      updatedActiveFilters.splice(index, 1);
    }

    setActiveFilters(updatedActiveFilters);
  };

  if (loading)
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <ActivityIndicator color="red" />
      </View>
    );
  return (
    <Container>
      <Header title="Budgets" amount={balance} />
      <Filter
        filters={filters}
        setActiveFilter={onFilterPressed}
        activeFilters={activeFilters}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Card {...item} />}
        ListEmptyComponent={() => (
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            Your budget is empty!
          </Text>
        )}
      />
    </Container>
  );
}

/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';
import { FlatList } from 'react-native';
import { Container, Header, Text } from '../../../components';

import Filter from '../../../components/UI/Filter';
import Card from '../../../components/UI/Card';
import Loading from '../../../components/UI/Loading';

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
  const [activeFilters, setActiveFilters] = useState<Array<string>>([]);
  const [data, setData] = useState<Array<ITransaction> | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  const filters = [
    'Food',
    'Home',
    'Education',
    'Leisure',
    'Investments',
    'Transport',
    'Test',
    'Others',
  ];

  useFocusEffect(
    React.useCallback(() => {
      const something = db.transaction((tx) => {
        setLoading(true);
        let query;
        let filter: any = [];
        if (activeFilters.length) {
          query = `SELECT * FROM transactions WHERE category LIKE '?'`;
          filter = activeFilters.map((_filter: string) =>
            _filter.toLowerCase()
          );
        } else query = `SELECT * FROM transactions`;
        tx.executeSql(query, filter, (row, success) => {
          if (success.rows.length > 0) {
            let tempBalance = 0;
            let updatedData: Array<ITransaction> = [];
            const temp: Array<ITransaction> = [];
            for (let i = 0; i < success.rows.length; i++) {
              const item = success.rows.item(i);
              if (item.type === 1) tempBalance += item.value;
              else tempBalance -= item.value;
              temp.push(item);
            }
            updatedData = [...temp];
            setData(updatedData);
            setBalance(tempBalance);
          }
        });
      });
      // const timeoutId = setTimeout(() => {
      //   setLoading(false);
      // }, 1000);
      return () => something;
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

  if (loading) return <Loading />;

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

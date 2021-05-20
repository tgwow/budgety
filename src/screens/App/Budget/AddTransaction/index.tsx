import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as SQLite from 'expo-sqlite';

import { useNavigation } from '@react-navigation/native';
import {
  Input,
  Header,
  ScrollableContainer,
  Text,
  Button,
  Container,
} from '../../../../components';
import styles from './styles';
import globalStyles from '../../../../styles';
import schema from './validation';
import DatePicker from '../../../../components/UI/DatePicker';
import { firstLetterUppercase } from '../../../../utils/heading';

export type FormData = {
  value: number;
  description: string;
  category: string;
};

const db = SQLite.openDatabase('db.budgety');
// tx.executeSql('DROP TABLE IF EXISTS transactions', []);

export default function AddTransaction() {
  const [transactionType, setTransactionType] = useState<1 | 0>(1);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const navigation = useNavigation();
  const title = transactionType === 1 ? 'incoming' : 'outgoing';

  const { control, handleSubmit } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      value: 0,
    },
  });

  useEffect(() => {
    // TODO: Execute this query just once
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS transactions(id INTEGER PRIMARY KEY AUTOINCREMENT, value INT(20), description VARCHAR(50), category VARCHAR(25), type INT(1), date VARCHAR(25))',
        [],
        undefined,
        (row, error) => {
          console.log(error);
          return false;
        }
      );
    });
  }, []);

  const onChangeDate = (_event: any, selectedDate: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onShowDate = () => {
    setShowDatePicker(true);
  };

  const onSubmit = async (data: FormData) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO transactions (value, description, category, type, date) VALUES (?,?,?,?,?)',
        [
          data.value,
          data.description,
          data.category,
          transactionType,
          date.toLocaleDateString(),
        ],
        (_tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              `Your ${title.toLowerCase()} was successfully created!`,
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              { cancelable: false }
            );
          } else alert('Registration Failed');
        }
      );
    });
  };

  return (
    <ScrollableContainer>
      <Header
        title={`New ${title}`}
        type={transactionType}
        onChangeType={setTransactionType}
      />
      <Container style={styles.container}>
        <Text>{firstLetterUppercase(title)} value: </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              style={globalStyles.input}
              keyboardType="number-pad"
            />
          )}
          name="value"
          defaultValue={0}
        />
        <Text>Description: </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={globalStyles.input} />
          )}
          name="description"
          defaultValue=""
        />
        <Text>Tag: </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={globalStyles.input} />
          )}
          name="category"
          defaultValue=""
        />
        <Text>Date: </Text>
        <Button title="Select date" onPress={() => onShowDate()} />
        <Button
          title="Save"
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        />
      </Container>
      {showDatePicker && (
        <DatePicker value={date} onChangeValue={onChangeDate} />
      )}
    </ScrollableContainer>
  );
}

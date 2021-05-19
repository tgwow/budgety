import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Input,
  Header,
  ScrollableContainer,
  Text,
  Button,
  Container,
} from '../../../../components';
import styles from '../../../Auth/SignIn/styles';
import schema from './validation';
import DatePicker from '../../../../components/UI/DatePicker';

export type FormData = {
  value: number;
  description: string;
  category: string;
};
export default function AddTransaction() {
  const [transactionType, setTransactionType] = useState<1 | 0>(1);
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: {
      value: 0,
    },
  });
  const title = transactionType === 1 ? 'incoming' : 'outgoing';
  const valueTitle = transactionType === 1 ? 'Incoming' : 'Expense';

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date.toLocaleDateString();
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const onShowDate = () => {
    setShowDatePicker(true);
  };

  const onSubmit = (data: FormData) => {
    console.log({ ...data, date: date.toLocaleDateString() });
  };

  const onSubmitError = (errors) => {
    console.log(errors?.value?.message);
    console.log(errors?.category?.message);
    console.log(errors?.description?.message);
  };

  return (
    <ScrollableContainer>
      <Header
        title={`New ${title}`}
        type={transactionType}
        onChangeType={setTransactionType}
      />
      <Container style={styles.container}>
        <Text>{valueTitle} value: </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={styles.input} keyboardType="number-pad" />
          )}
          name="value"
          defaultValue={0}
        />
        <Text>Description: </Text>
        <Controller
          control={control}
          render={({ field }) => <Input {...field} style={styles.input} />}
          name="description"
          defaultValue=""
        />
        <Text>Tag: </Text>
        <Controller
          control={control}
          render={({ field }) => <Input {...field} style={styles.input} />}
          name="category"
          defaultValue=""
        />
        <Text>Date: </Text>
        <Button title="Select date" onPress={() => onShowDate()} />
        <Button title="Save" onPress={handleSubmit(onSubmit, onSubmitError)} />
      </Container>
      {showDatePicker && (
        <DatePicker value={date} onChangeValue={onChangeDate} />
      )}
    </ScrollableContainer>
  );
}

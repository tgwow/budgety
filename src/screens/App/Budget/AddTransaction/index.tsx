import React, { useState } from 'react';
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

export default function AddTransaction() {
  const [transactionType, setTransactionType] = useState<1 | 0>(1);
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const title = transactionType === 1 ? 'incoming' : 'outgoing';
  const valueTitle = transactionType === 1 ? 'Incoming' : 'Expense';
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
          render={({ field }) => <Input {...field} style={styles.input} />}
          name="value"
          defaultValue=""
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
        <Controller
          control={control}
          render={({ field }) => <Input {...field} style={styles.input} />}
          name="date"
          defaultValue=""
        />
        <Button title="Save" />
      </Container>
    </ScrollableContainer>
  );
}

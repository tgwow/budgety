import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Header, Text } from '../../../components';

import { IAppStack } from '../../../navigation/App';
import Filter from '../../../components/UI/Filter';
import Card from '../../../components/UI/Card';

type IBudget = {
  navigation: StackNavigationProp<IAppStack, 'Budget'>;
};

export default function Budget() {
  return (
    <Container>
      <Header title="Budgets" amount={1302.2} />
      <Filter
        filters={['All', 'Food', 'Home', 'Others', 'Study', 'Drugs', 'Leisure']}
      />
      <Card type="incoming" title="Salary" amount={35} date={new Date()} />
      <Card
        type="outgoing"
        title="Fried chicken"
        amount={3539}
        date={new Date()}
      />
      <Card type="incoming" title="Rents" amount={120} date={new Date()} />
      <Card
        type="outgoing"
        title="Internet payment"
        amount={45.99}
        date={new Date()}
      />
    </Container>
  );
}

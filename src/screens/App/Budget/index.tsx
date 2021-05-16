import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { Container, Header, Text } from '../../../components';

import { IAppStack } from '../../../navigation/App';
import Filter from '../../../components/UI/Filter';

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
    </Container>
  );
}

import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import { Container, Header, Text } from '../../../components';

import { IAppStack } from '../../../navigation/App';

type IBudget = {
  navigation: StackNavigationProp<IAppStack, 'Budget'>;
};

export default function Budget() {
  return (
    <>
      <Header title="Budgets" amount={1302.2} />
      <Container style={styles.container}>
        <Text>teste</Text>
      </Container>
    </>
  );
}

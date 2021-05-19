import React, { useState } from 'react';
import { Container, Header, Text } from '../../../components';

import Filter from '../../../components/UI/Filter';
import Card from '../../../components/UI/Card';

export default function Budget() {
  const [activeFilters, setActiveFilters] = useState(['All']);
  const filters = [
    'All',
    'Food',
    'Home',
    'Others',
    'Study',
    'Drugs',
    'Leisure',
  ];
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
  return (
    <Container>
      <Header title="Budgets" amount={1302.2} />
      <Filter
        filters={filters}
        setActiveFilter={onFilterPressed}
        activeFilters={activeFilters}
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

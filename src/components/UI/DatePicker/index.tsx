import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

const DatePicker = ({ value, onChangeValue }: any) => (
  <DateTimePicker
    testID="dateTimePicker"
    value={value}
    mode="date"
    is24Hour
    display="default"
    onChange={onChangeValue}
  />
);

export default DatePicker;

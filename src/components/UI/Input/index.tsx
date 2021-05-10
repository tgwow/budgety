import React, { useState } from 'react';
import { Input, TextInputProps } from '../../Themed';
import styles from './styles';

type ITextInput = {
  test?: string;
} & TextInputProps;

export default function StyledInput({
  onBlur,
  onChange,
  value,
  style,
}: ITextInput) {
  const [focused, setFocused] = useState(false);
  return (
    <Input
      onBlur={(e) => {
        setFocused(false);
        if (onBlur) {
          onBlur(e);
        }
      }}
      onFocus={() => setFocused(true)}
      onChange={(val) => (onChange ? onChange(val) : undefined)}
      value={value}
      style={[style, styles(focused).input]}
    />
  );
}

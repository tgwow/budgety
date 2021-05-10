import React, { useState } from 'react';
import { Input, TextInputProps } from '../../Themed';
import styles from './styles';

type ITextInput = {
  test?: string;
} & TextInputProps;

export default function StyledInput({
  onBlur,
  onChange,
  style,
  ...rest
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
      onChangeText={(val: any) => (onChange ? onChange(val) : undefined)}
      style={[style, styles(focused).input]}
      {...rest}
    />
  );
}

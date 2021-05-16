import React, { useState } from 'react';
import { Input, TextInputProps } from '../../Themed';
import styles from './styles';

type ITextInput = {
  test?: string;
} & TextInputProps;

const StyledInput = React.forwardRef(
  ({ onBlur, onChange, style, ...rest }: ITextInput, ref) => {
    const [focused, setFocused] = useState(false);
    return (
      <Input
        ref={ref}
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
);

export default StyledInput;

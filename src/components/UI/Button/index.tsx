import React from 'react';
import { ButtonProps, Button } from '../../Themed';
import Text from '../Text';
import styles from './styles';

type IStyledButton = {
  title: string;
} & ButtonProps;

export default function StyledButton({ style, title, ...rest }: IStyledButton) {
  return (
    <Button style={[style, styles.button]} {...rest}>
      <Text level={3} weight="700">
        {title}
      </Text>
    </Button>
  );
}

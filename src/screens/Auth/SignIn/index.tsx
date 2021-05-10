import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './styles';
import Container from '../../../components/Layout/Container';
import { View } from '../../../components/Themed';
import {
  StyledText,
  StyledButton,
  StyledInput,
  StyledError,
} from '../../../components';
import schema from './validation';

export type ISignInForm = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSignIn = ({ email, password }: ISignInForm) => {
    if (email !== 'admin@admin.com' || password !== 'Admin123')
      alert('Invalid credentials');
  };
  return (
    <Container style={styles.container}>
      <View>
        <StyledText level={6} weight="700">
          Sign In
        </StyledText>
        <StyledText level={2} weight="200">
          Welcome back!
        </StyledText>
      </View>

      <View>
        <StyledText level={2} weight="700">
          Email
        </StyledText>
        <Controller
          control={control}
          render={({ field }) => (
            <StyledInput {...field} style={styles.input} />
          )}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        <StyledError>{errors.email && errors.email.message}</StyledError>

        <StyledText level={2} weight="700">
          Password
        </StyledText>
        <Controller
          control={control}
          render={({ field }) => (
            <StyledInput {...field} style={styles.input} secureTextEntry />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <StyledError>{errors.password && errors.password.message}</StyledError>

        <TouchableOpacity style={styles.forgotContainer}>
          <StyledText level={1} weight="200" style={styles.underline}>
            Forgot Password
          </StyledText>
        </TouchableOpacity>
      </View>
      <View>
        <StyledButton
          title="Log In"
          onPress={handleSubmit(handleSignIn)}
          style={styles.button}
        />
        <TouchableOpacity style={styles.createContainer}>
          <StyledText level={1} weight="200">
            or create an account{' '}
            <StyledText level={1} weight="200" style={styles.underline}>
              here!
            </StyledText>
          </StyledText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

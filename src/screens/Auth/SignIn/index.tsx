import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
import Container from '../../../components/Layout/Container';
import { View } from '../../../components/Themed';
import { StyledText, StyledButton, StyledInput } from '../../../components';

export type ISignInForm = {
  email: string;
  password: string;
};

export default function SignIn() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>();

  const handleSignIn = ({ email, password }: ISignInForm) => {
    console.log(errors);
    console.log({ email, password });
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
        <StyledText level={2} weight="700">
          Password
        </StyledText>
        <Controller
          control={control}
          render={({ field }) => (
            <StyledInput {...field} style={styles.input} />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
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

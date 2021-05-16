import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';
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
import { ICredentials } from '../../../types';
import { IAuthStack } from '../../../navigation/Auth';

export type ISignUpForm = {
  name: string;
} & ICredentials;

export type ISignUp = {
  navigation: StackNavigationProp<IAuthStack, 'SignIn'>;
};
export default function SignUp({ navigation }: ISignUp) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignUpForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const handleSignUp = ({ email, name, password }: ISignUpForm) => {
    navigation.navigate('HeadedList');
  };
  return (
    <Container style={styles.container}>
      <View>
        <StyledText level={6} weight="700">
          Sign Up
        </StyledText>
        <StyledText level={2} weight="200">
          Facilitate your life!
        </StyledText>
      </View>

      <View>
        <StyledText level={2} weight="700">
          Name
        </StyledText>
        <Controller
          control={control}
          render={({ field }) => (
            <StyledInput {...field} style={styles.input} />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
        <StyledError>{errors.name && errors.name.message}</StyledError>
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
      </View>
      <View>
        <StyledButton
          title="Sign Up"
          onPress={handleSubmit(handleSignUp, () =>
            navigation.navigate('HeadedList')
          )}
          style={styles.button}
        />
        <TouchableOpacity style={styles.createContainer}>
          <StyledText level={1} weight="200">
            back to{' '}
            <StyledText
              level={1}
              weight="200"
              style={styles.underline}
              onPress={() => navigation.navigate('SignIn')}
            >
              SignIn!
            </StyledText>
          </StyledText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

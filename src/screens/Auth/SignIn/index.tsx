import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSetRecoilState } from 'recoil';
import styles from './styles';
import { Container, Text, Button, Input, Error } from '../../../components';

import { View } from '../../../components/Themed';

import schema from './validation';
import { ICredentials } from '../../../types';
import { IAuthStack } from '../../../navigation/Auth';
import { isLoggedInState } from '../../../atom';

export type ISignInForm = ICredentials;

type ISignIn = {
  navigation: StackNavigationProp<IAuthStack, 'SignUp'>;
};

export default function SignIn({ navigation }: ISignIn) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignInForm>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleSignIn = ({ email, password }: ISignInForm) => {
    if (email !== 'admin@admin.com' || password !== 'Admin123') {
      alert('Invalid credentials');
      return;
    }
    setIsLoggedIn(true);
  };

  return (
    <Container style={styles.container}>
      <View>
        <Text level={6} weight="700">
          Sign In
        </Text>
        <Text level={2} weight="200">
          Welcome back!
        </Text>
      </View>

      <View>
        <Text level={2} weight="700">
          Email
        </Text>
        <Controller
          control={control}
          render={({ field }) => <Input {...field} style={styles.input} />}
          name="email"
          rules={{ required: true }}
          defaultValue=""
        />
        <Error>{errors.email && errors.email.message}</Error>

        <Text level={2} weight="700">
          Password
        </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={styles.input} secureTextEntry />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <Error>{errors.password && errors.password.message}</Error>

        <TouchableOpacity style={styles.forgotContainer}>
          <Text level={1} weight="200" style={styles.underline}>
            Forgot Password
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button
          title="Log In"
          onPress={handleSubmit(handleSignIn)}
          style={styles.button}
        />
        <TouchableOpacity style={styles.createContainer}>
          <Text level={1} weight="200">
            or create an account{' '}
            <Text
              level={1}
              weight="200"
              style={styles.underline}
              onPress={() => navigation.navigate('SignUp')}
            >
              here!
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

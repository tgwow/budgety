import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { StackNavigationProp } from '@react-navigation/stack';
import styles from './styles';
import globalStyles from '../../../styles';
import { View } from '../../../components/Themed';
import {
  Text,
  Button,
  Input,
  Error,
  ScrollableContainer,
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
    // navigation.navigate('HeadedList');
  };
  return (
    <ScrollableContainer contentContainerStyle={styles.container}>
      <View>
        <Text level={6} weight="700">
          Sign Up
        </Text>
        <Text level={2} weight="200">
          Facilitate your life!
        </Text>
      </View>

      <View>
        <Text level={2} weight="700">
          Name
        </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={globalStyles.input} />
          )}
          name="name"
          rules={{ required: true }}
          defaultValue=""
        />
        <Error>{errors.name && errors.name.message}</Error>
        <Text level={2} weight="700">
          Email
        </Text>
        <Controller
          control={control}
          render={({ field }) => (
            <Input {...field} style={globalStyles.input} />
          )}
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
            <Input {...field} style={globalStyles.input} secureTextEntry />
          )}
          name="password"
          rules={{ required: true }}
          defaultValue=""
        />
        <Error>{errors.password && errors.password.message}</Error>
      </View>
      <View>
        <Button
          title="Sign Up"
          onPress={handleSubmit(handleSignUp)}
          style={globalStyles.button}
        />
        <TouchableOpacity style={globalStyles.createContainer}>
          <Text level={1} weight="200">
            back to{' '}
            <Text
              level={1}
              weight="200"
              style={globalStyles.underline}
              onPress={() => navigation.navigate('SignIn')}
            >
              SignIn!
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollableContainer>
  );
}

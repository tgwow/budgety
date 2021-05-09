import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import StyledText from '../../../components/UI/Text';
import Container from '../../../components/Layout/Container';
import { View } from '../../../components/Themed';

export default function SignIn() {
  return (
    <Container style={styles.container}>
      <View>
        <StyledText level={6} weight="700" style={styles.title}>
          Sign In
        </StyledText>
        <StyledText level={2} weight="200">
          Welcome back!
        </StyledText>
      </View>

      <View>
        <StyledText level={2} weight="700" style={styles.title}>
          Email
        </StyledText>
        <StyledText level={2} weight="700" style={styles.title}>
          Password
        </StyledText>
        <TouchableOpacity>
          <StyledText level={1} weight="200" style={styles.forgotPassword}>
            Forgot Password
          </StyledText>
        </TouchableOpacity>
      </View>
      <View>
        <StyledText level={5} weight="700" style={styles.title}>
          Log In
        </StyledText>
        <TouchableOpacity>
          <StyledText level={1} weight="200" style={styles.createAccount}>
            or create an account here!
          </StyledText>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

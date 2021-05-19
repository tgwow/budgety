import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    justifyContent: 'space-evenly',
    paddingHorizontal: '30@s',
  },
  input: {
    marginBottom: '30@vs',
  },
  button: {
    padding: 20,
  },
  underline: {
    textDecorationLine: 'underline',
  },
  createContainer: {
    marginTop: '15@vs',
    alignSelf: 'center',
  },
});

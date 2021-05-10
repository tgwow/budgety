import { ScaledSheet } from 'react-native-size-matters';

export default ScaledSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  input: {
    marginTop: '5@vs',
    marginBottom: '20@vs',
  },
  forgotContainer: {
    marginTop: '-18@vs',
    alignSelf: 'flex-end',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  createContainer: {
    marginTop: '15@vs',
    alignSelf: 'center',
  },
  button: {
    padding: 20,
  },
});

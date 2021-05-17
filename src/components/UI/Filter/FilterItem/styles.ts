import { ScaledSheet } from 'react-native-size-matters';

export default (color?: string) =>
  ScaledSheet.create({
    button: {
      padding: '5@s',
      paddingHorizontal: '10@s',
      borderRadius: 15,
      backgroundColor: color,
    },
    label: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

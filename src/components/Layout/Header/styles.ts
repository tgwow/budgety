import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

export const styles = ScaledSheet.create({
  budget: {
    paddingHorizontal: '30@s',
    paddingTop: '30@vs',
  },
  title: {
    marginBottom: '15@s',
  },
  amount: {},
  add: {
    padding: '7@s',
    borderRadius: '40@s',
    backgroundColor: Colors.dark.primary,
  },
});

export const footerStyles = (height: number) =>
  ScaledSheet.create({
    card: {
      paddingVertical: '20@s',
      paddingHorizontal: '30@s',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: '10@s',
      marginTop: -height / 2,
      transform: [
        {
          translateY: height / 2,
        },
      ],
    },
  });

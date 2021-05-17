import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../../constants/Colors';

export default ScaledSheet.create({
  card: {
    marginTop: '20@vs',
    marginHorizontal: '30@s',
    paddingVertical: '5@s',
    paddingHorizontal: '15@s',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '40@s',
    backgroundColor: Colors.dark.backgroundContrast,
  },
  amount: {},
  row: {
    flexDirection: 'row',
  },
  tag: {
    paddingHorizontal: '5@s',
    borderWidth: 0.5,
    borderColor: 'yellow',
    borderRadius: 5,
    marginLeft: '5@s',
    textTransform: 'lowercase',
  },
});

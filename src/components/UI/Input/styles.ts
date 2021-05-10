import { ScaledSheet } from 'react-native-size-matters';

export default (focused: boolean) => {
  let border;
  if (!focused)
    border = {
      borderColor: 'rgba(158, 150, 150, .0)',
    };
  return ScaledSheet.create({
    input: {
      paddingHorizontal: '10@s',
      paddingVertical: '8@s',
      borderRadius: 5,
      borderWidth: 1,
      ...border,
    },
  });
};

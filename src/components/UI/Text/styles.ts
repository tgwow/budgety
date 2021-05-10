import { ScaledSheet } from 'react-native-size-matters';
import { IWeight } from '../../../types/styles';
import { LEVELS, WEIGHTS } from '../../../constants/styles';

export default (level = 2, weight: IWeight = '400') =>
  ScaledSheet.create({
    title: {
      fontSize: `${LEVELS[level]}@s`,
      fontFamily: WEIGHTS[weight],
    },
  });

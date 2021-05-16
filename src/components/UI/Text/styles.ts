import { ScaledSheet } from 'react-native-size-matters';
import { LEVELS, WEIGHTS } from '../../../constants/styles';
import { IWeight } from '../../../types';

export default (level = 2, weight: IWeight = '400') =>
  ScaledSheet.create({
    title: {
      fontSize: `${LEVELS[level]}@s`,
      fontFamily: WEIGHTS[weight],
    },
  });

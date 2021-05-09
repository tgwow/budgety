import { ScaledSheet } from 'react-native-size-matters';

const levels: { [key: number]: string } = {
  1: '11',
  2: '14',
  3: '16',
  4: '20',
  5: '26',
  6: '38',
};

const weights: { [key: string]: string } = {
  '100': 'RobotoThin',
  '200': 'RobotoLight',
  '400': 'Roboto',
  '700': 'RobotoBold',
};

export type IWeight = '100' | '200' | '400' | '700';

export default (level = 2, weight: IWeight = '400') =>
  ScaledSheet.create({
    title: {
      fontSize: `${levels[level]}@s`,
      fontFamily: weights[weight],
    },
  });

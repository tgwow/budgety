import React from 'react';
import { StyleSheet, Switch, SwitchProps } from 'react-native';
import { View } from '../../Themed';
import Colors from '../../../constants/Colors';

type IStyledSwitch = SwitchProps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

const StyledSwitch = ({ onValueChange, value, ...rest }: IStyledSwitch) => (
  <View style={styles.container} darkColor={Colors.dark.primary}>
    <Switch
      trackColor={{ false: Colors.dark.red, true: Colors.dark.green }}
      thumbColor={value ? Colors.dark.green : Colors.dark.red}
      onValueChange={onValueChange}
      value={value}
    />
  </View>
);

export default StyledSwitch;

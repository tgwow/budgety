import React from 'react';
import { default as DefaultModal } from 'react-native-modal';
import { View } from '../../Themed';
import Text from '../Text';
import styles from './styles';

type IModal = {
  isVisible: boolean;
  setIsVisible: any;
};

const Modal = ({ isVisible = false, setIsVisible }: IModal) => (
  <View>
    <DefaultModal
      isVisible={isVisible}
      onBackdropPress={() => setIsVisible(false)}
    >
      <View style={styles.modal}>
        <Text>Expense value: </Text>
        <Text>Description: </Text>
        <Text>Tag: </Text>
        <Text>Date: </Text>
      </View>
    </DefaultModal>
  </View>
);

export default Modal;

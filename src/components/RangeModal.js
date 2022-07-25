import React from 'react';
import {
  Button,
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: Dimensions.get('window').height,
  },
  modalView: {
    margin: 20,
    marginTop: 150,
    backgroundColor: '#ed4779',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 100,
    padding: 10,
    backgroundColor: 'white',
  },
  inputView: {
    flex: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  submit: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
});
const RangeModal = ({isVisible, onClose}) => {
  return (
    <Modal visible={isVisible} transparent={true} animationType={'fade'}>
      <View style={styles.modal}>
        <View style={styles.modalView}>
          <Text
            style={[
              styles.submit,
              {textAlign: 'left', width: '100%', marginBottom: 10},
            ]}>
            Range
          </Text>
          <View style={styles.inputView}>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Year"
            />
            <Text style={{color: 'white', fontSize: 20}}>To</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Year"
            />
          </View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.submit}>Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default RangeModal;

import React, {useState} from 'react';
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
import CheckBox from '@react-native-community/checkbox';

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
  checkboxText: {
    fontSize: 20,
    color: 'white',
  },
  inputLabel: {
    color: 'white',
    fontSize: 20,
  },
  checkboxView: {
    flex: 0,
    flexDirection: 'row',
    textAlign: 'left',
    width: '100%',
  },
  checkbox: {
    color: 'white',
  },
});
const RangeModal = ({isVisible, onClose}) => {
  const [toggleOneCheckBox, setToggleOneCheckBox] = useState(false);
  const [toggleTwoCheckBox, setToggleTwoCheckBox] = useState(false);
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
            <Text style={styles.inputLabel}>To</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Year"
            />
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              disabled={false}
              value={toggleOneCheckBox}
              onValueChange={newValue => setToggleOneCheckBox(newValue)}
            />
            <Text style={styles.checkboxText}>P1</Text>
          </View>
          <View style={styles.checkboxView}>
            <CheckBox
              disabled={false}
              value={toggleTwoCheckBox}
              onValueChange={newValue => setToggleTwoCheckBox(newValue)}
            />
            <Text style={styles.checkboxText}>P2</Text>
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

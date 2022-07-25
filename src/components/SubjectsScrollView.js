import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import AppStyle from '../styles/AppStyle';
const SubjectsScrollView = ({navigation, subjects, navigationName, label}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
    },
    btn: {
      fontSize: 24,
      color: 'white',
      margin: 15,
      backgroundColor: '#ed4779',
      borderRadius: 4,
      textAlign: 'center',
      paddingVertical: 2,
    },
    label: {
      fontSize: 100,
      color: '#8c8c8c',
      margin: 15,
      borderRadius: 4,
      textAlign: 'center',
      paddingVertical: 20,
    },
    labelContainer: {
      flex: 2,
      justifyContent: 'center',
    },
    scroller: {
      flex: 2,
      maxHeight: Dimensions.get('screen').height / 2,
      marginBottom: 20,
    },
  });
  return (
    <>
      <View style={[styles.container, AppStyle.appScreen]}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.scroller}>
          <ScrollView>
            {subjects.map((subject, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(navigationName, {
                      subject: subject,
                    })
                  }
                  key={index}>
                  <Text key={subject} style={styles.btn}>
                    {subject}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default SubjectsScrollView;

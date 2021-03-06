import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import NavigationConstants from '../constants/NavigationConstants';

const SubjectsScrollView = ({navigation, subjects, navigationName, label}) => {
  const styles = StyleSheet.create({
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
      fontSize: 50,
      color: '#8c8c8c',
      margin: 15,
      backgroundColor: '#f2f7f7',
      borderRadius: 4,
      textAlign: 'center',
      paddingVertical: 20,
      elevation: 3,
      marginTop: 70,
      marginBottom: 100,
    },
  });
  return (
    <>
      <View>
        <Text style={styles.label}>{label}</Text>
        <ScrollView>
          {subjects.map((subject, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(navigationName, {
                    title: subject,
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
    </>
  );
};

export default SubjectsScrollView;

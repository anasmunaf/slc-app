import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigationConstants from '../constants/NavigationConstants';
import AppStyle from '../styles/AppStyle';
const PaperScrollView = ({navigation, papers, route}) => {
  const styles = StyleSheet.create({
    btn: {
      margin: 15,
      backgroundColor: '#007ba4',
      borderRadius: 4,
      paddingVertical: 2,
      paddingHorizontal: 5,
      display: 'flex',
      flex: 2,
    },
    list: {
      marginTop: 70,
    },
    txt: {
      fontSize: 16,
      color: 'white',
      margin: 2,
      marginHorizontal: 5,
    },
    labelRowTwo: {
      flex: 1,
      flexDirection: 'row',
    },
    container: {
      flex: 1,
    },
    headText: {
      fontSize: 30,
      color: '#ed4779',
      marginTop: 50,
    },
    headView: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });

  return (
    <View style={[styles.container, AppStyle.appScreen]}>
      <View style={styles.headView}>
        <Text style={styles.headText}>{route?.params?.subject}</Text>
      </View>
      <View>
        <ScrollView style={styles.list}>
          {papers?.map((paper, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(NavigationConstants.YEARLY_PDF, {
                    id: paper._id,
                  })
                }
                key={index}>
                <View style={styles.btn}>
                  <View>
                    <Text style={styles.txt}>
                      {paper.category === 'QS'
                        ? 'Question Paper'
                        : 'Marking Scheme'}
                    </Text>
                  </View>
                  <View style={styles.labelRowTwo}>
                    <Text style={styles.txt}>{paper.subject}</Text>
                    <Text style={styles.txt}>{paper.year}</Text>
                    <Text style={styles.txt}>{paper.month}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default PaperScrollView;

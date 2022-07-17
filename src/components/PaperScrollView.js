import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigationConstants from '../constants/NavigationConstants';

const PaperScrollView = ({navigation, papers}) => {
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
      marginTop: 100,
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
  });

  return (
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
  );
};

export default PaperScrollView;

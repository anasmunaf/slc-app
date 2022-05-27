import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import OYearlyData from '../../utils/Api/O-Yearly-Api';

const YearlyPapers = ({route}) => {
  async function fetchData() {
    setPapers(await OYearlyData());
  }
  const [papers, setPapers] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  console.log(papers);
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
    <>
      <View>
        <ScrollView style={styles.list}>
          {papers?.map(paper => {
            return (
              <TouchableOpacity>
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
    </>
  );
};

export default YearlyPapers;

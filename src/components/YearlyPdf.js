import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';

const YearlyPdf = ({route}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginTop: 25,
    },
    pdf: {
      flex: 1,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
  });
  return (
    <Pdf
      trustAllCerts={false}
      source={{uri: route?.params.url}}
      // onLoadComplete={(numberOfPages, filePath) => {
      //   console.log(`Number of pages: ${numberOfPages}`);
      // }}
      // onPageChanged={(page, numberOfPages) => {
      //   console.log(`Current page: ${page}`);
      // }}
      // onError={error => {
      //   console.log(error);
      // }}
      // onPressLink={uri => {
      //   console.log(`Link pressed: ${uri}`);
      // }}
      style={styles.pdf}
    />
  );
};

export default YearlyPdf;

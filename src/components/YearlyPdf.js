import React, {useEffect, useState} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Pdf from 'react-native-pdf';
import {OYearlyPdf} from '../utils/Api/O-Yearly-Api';
const YearlyPdf = ({route}) => {
  const [url, setUrl] = useState();
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

  useEffect(() => {
    OYearlyPdf(route?.params.id).then(data => {
      setUrl(data?.pdf.buffer);
    });
  }, []);
  return (
    <Pdf
      trustAllCerts={false}
      source={{uri: `data:application/pdf;base64,${url}`}}
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

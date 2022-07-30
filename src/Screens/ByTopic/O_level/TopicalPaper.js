import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import CustomPapers from '../../../components/CustomPapers';

const TopicalPaper = () => {
  return (
    <>
      <ScrollView>
        <CustomPapers
          uri={
            'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
          }
        />
      </ScrollView>
    </>
  );
};

export default TopicalPaper;

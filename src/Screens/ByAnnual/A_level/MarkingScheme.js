import React, {useEffect, useState} from 'react';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';
import PaperScrollView from '../../../components/PaperScrollView';

const MarkingScheme = ({navigation}) => {
  const [papers, setPapers] = useState();

  useEffect(() => {
    OYearlyData().then(data => {
      setPapers(data?.filter(item => item.category === 'MS'));
    });
  }, []);

  return <PaperScrollView papers={papers} />;
};

export default MarkingScheme;

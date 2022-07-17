import React, {useEffect, useState} from 'react';
import PaperScrollView from '../../../components/PaperScrollView';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';

const YearlyPapers = ({navigation}) => {
  const [papers, setPapers] = useState();
  useEffect(() => {
    OYearlyData().then(data => {
      setPapers(data);
    });
  }, []);

  return <PaperScrollView papers={papers} />;
};

export default YearlyPapers;

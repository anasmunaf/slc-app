import React, {useEffect, useState} from 'react';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';
import PaperScrollView from '../../../components/PaperScrollView';

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

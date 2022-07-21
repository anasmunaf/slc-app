import React, {useEffect, useState} from 'react';
import PaperScrollView from '../../../components/PaperScrollView';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';

const YearlyPapers = props => {
  const [papers, setPapers] = useState();
  useEffect(() => {
    OYearlyData().then(data => {
      setPapers(data);
    });
  }, []);

  return <PaperScrollView papers={papers} {...props} />;
};

export default YearlyPapers;

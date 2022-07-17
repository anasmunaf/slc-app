import React, {useEffect, useState} from 'react';
import {OYearlyData} from '../../../utils/Api/O-Yearly-Api';
import PaperScrollView from '../../../components/PaperScrollView';

const QuestionPaper = ({navigation}) => {
  const [papers, setPapers] = useState();

  useEffect(() => {
    OYearlyData().then(data => {
      setPapers(data?.filter(item => item.category === 'QS'));
    });
  }, []);

  return <PaperScrollView papers={papers} />;
};

export default QuestionPaper;

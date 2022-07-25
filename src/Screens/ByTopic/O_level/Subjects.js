import React from 'react';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/A_level';
import SubjectsScrollView from '../../../components/SubjectsScrollView';

const Subjects = props => {
  return (
    <SubjectsScrollView
      label={"O' level"}
      subjects={subjects}
      navigationName={NavigationConstants.O_LEVEL.TOPIC_FILTER}
      {...props}
    />
  );
};

export default Subjects;

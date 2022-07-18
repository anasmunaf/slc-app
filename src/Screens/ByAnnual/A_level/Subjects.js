import React from 'react';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/A_level';
import SubjectsScrollView from '../../../components/SubjectsScrollView';

const Subjects = props => {
  return (
    <SubjectsScrollView
      label={"A' Level"}
      subjects={subjects}
      navigationName={NavigationConstants.A_LEVEL.YEARLY_TAB}
      {...props}
    />
  );
};

export default Subjects;

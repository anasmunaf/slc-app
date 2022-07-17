import React from 'react';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/A_level';
import SubjectsScrollView from '../../../components/SubjectsScrollView';

const Subjects = () => {
  <SubjectsScrollView
    subjects={subjects}
    navigationName={NavigationConstants.A_LEVEL.YEARLY_TAB}
  />;
};

export default Subjects;

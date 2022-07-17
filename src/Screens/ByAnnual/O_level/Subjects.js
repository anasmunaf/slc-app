import React from 'react';
import SubjectsScrollView from '../../../components/SubjectsScrollView';
import NavigationConstants from '../../../constants/NavigationConstants';
import {subjects} from '../../../constants/O_level';

const Subjects = () => {
  <SubjectsScrollView
    subjects={subjects}
    navigationName={NavigationConstants.O_LEVEL.YEARLY_TAB}
  />;
};

export default Subjects;

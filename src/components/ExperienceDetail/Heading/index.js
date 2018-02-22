import React from 'react';
import PropTypes from 'prop-types';
import { Heading, P } from 'common/base';

import styles from './Heading.module.css';

const formatType = type =>
  (type === 'work' ? '工作' : '面試');

const formatComapny = company => {
  if (company) {
    return (typeof company.name === 'string')
      ? company.name
      : company.name.join(' / ');
  }
  return null;
};

const ExperienceHeading = ({ experience }) =>
  (
    <div className={styles.heading}>
      <P Tag="h2" size="l" className={styles.badge}>
        {experience && formatType(experience.type)}
      </P>
      <Heading size="l">
        {experience && formatComapny(experience.company)}
      </Heading>
    </div>
  );

ExperienceHeading.propTypes = {
  experience: PropTypes.object,
};

export default ExperienceHeading;

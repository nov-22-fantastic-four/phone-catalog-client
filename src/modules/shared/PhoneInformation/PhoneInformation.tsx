import React from 'react';
import styles from './PhoneInformation.module.scss';

interface Props {
  text: string
  value: string
}

export const PhoneInformation: React.FC<Props> = ({ text, value }) => {
  return (
    <div className={styles.phoneInformation}>
      <p className={styles.phoneInformationText}>
        {text}
      </p>

      <p className={styles.phoneInformationValue}>
        {value}
      </p>
    </div>
  );
};

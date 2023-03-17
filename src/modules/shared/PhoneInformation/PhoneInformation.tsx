import React from 'react';
import styles from './PhoneInformation.module.scss';

interface Props {
  text: string
  value: string
}

export const PhoneInformation: React.FC<Props> = ({ text, value }) => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {text}
      </p>

      <p className={styles.value}>
        {value}
      </p>
    </div>
  );
};

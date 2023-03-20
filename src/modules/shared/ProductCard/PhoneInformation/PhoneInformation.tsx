import React from 'react';
import styles from './PhoneInformation.module.scss';

interface Props {
  text: string
  value: string | string[]
}

export const PhoneInformation: React.FC<Props> = ({ text, value }) => {
  const isArray = Array.isArray(value);
  const isLasted = (index: number): boolean => {
    return index === value.length - 1;
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>
        {text}
      </p>

      {isArray
        ? (
          <div className={styles.container}>
            {value.map((el, index) =>
              isLasted(index)
                ? (
                  <span key={el} className={styles.value} >
                    {`${el}`}
                  </span>)
                : (
                  <span key={el} className={styles.value} >
                    {`${el}, `}
                  </span>))
            }
          </div>)
        : (
          <p className={styles.value}>
            {value}
          </p>)
      }
    </div>
  );
};

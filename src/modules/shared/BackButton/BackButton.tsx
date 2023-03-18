import React from 'react';
import styles from './BackButton.module.scss';
import shevron_l_grey from '../../../images/icons/shevron-left-grey.svg';
import { useNavigate } from 'react-router-dom';

export const BackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = (): void => {
    navigate(-1);
  };

  return (
    <div className={styles.backContainer}>
      <img
        src={shevron_l_grey}
        alt='homeIcon'
        className={styles.icon}
      />
      <button
        className={styles.button}
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
};

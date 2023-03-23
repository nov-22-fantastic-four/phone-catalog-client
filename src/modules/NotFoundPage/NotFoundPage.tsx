import React from 'react';
import { BackButton, Container } from '../shared';
import error_image from '../../images/404_error_image.svg';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <Container>
      <BackButton />

      <div className={styles.container}>
        <img
          src={error_image}
          alt="404"
          className={styles.icon}
        />
        <h1>Page not found</h1>
        <Link to='/' className={styles.button}>
          Go To Homepage
        </Link>
      </div>
    </Container>
  );
};

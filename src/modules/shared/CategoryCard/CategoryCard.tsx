import React from 'react';
import styles from './CategoryCard.module.scss';
import phones from '../../../images/category-phones.png';
import tablets from '../../../images/category-tablets.png';
import accessories from '../../../images/category-accessories.png';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export const CategoryCard: React.FC = () => {
  return (
    <>
      <h2 className={styles.title}>
        Shop by category
      </h2>
      <div className={styles.category}>
        <Link className={styles.image_link} to="/phones">
          <div className={styles.link_phones}>
            <img src={phones} alt='phones image' className={styles.image}/>
          </div>
          <p className={styles.text_category}>Mobile phones</p>
          <p className={styles.text_count}>95 models</p>
        </Link>

        <Link className={styles.image_link} to="/tablets">
          <div className={styles.link_tablets}>
            <img
              src={tablets}
              alt='tablets image'
              className={classNames(styles.image, styles.image_tablet)}
            />
          </div>
          <p className={styles.text_category}>Tablets</p>
          <p className={styles.text_count}>24 models</p>
        </Link>

        <Link className={styles.image_link} to="/accessories">
          <div className={styles.link_accessories}>
            <img
              src={accessories}
              alt='accessories image'
              className={classNames(styles.image, styles.image_accessories)}
            />
          </div>
          <p className={styles.text_category}>Accessories</p>
          <p className={styles.text_count}>100 models</p>
        </Link>
      </div>
    </>
  );
};

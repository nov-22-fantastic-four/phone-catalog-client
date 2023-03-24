import React from 'react';
import styles from './Pagination.module.scss';
import cn from 'classnames';
import { useSearchParams } from 'react-router-dom';
import { getPages } from './utils';

import nextIcon from '../../../images/icons/chevron-right-black.svg';
import prevIcon from '../../../images/icons/chevron-left-black.svg';
import { scrollToTop } from '../../../utils';

interface Props {
  totalItems: number,
}

export const Pagination: React.FC<Props> = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get('page') || 1);
  const perPage = Number(searchParams.get('perPage') || 16);

  const pageCount = Math.ceil(totalItems / perPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === pageCount;

  const pages = getPages(currentPage, pageCount);

  const changePage = (page: number): void => {
    if (page === 1) {
      searchParams.delete('page');
    } else {
      searchParams.set('page', String(page));
    }

    setSearchParams(searchParams);
    scrollToTop();
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.arrow}
        onClick={() => {
          changePage(currentPage - 1);
        }}
        disabled={isFirstPage}
      >
        <img src={prevIcon} alt="arrow left" />
      </button>

      <div className={styles.pages}>
        {pages.map(page => {
          const isCurrent = page === currentPage;

          return (
            <button
              key={page}
              className={cn(styles.button, {
                [styles.current]: isCurrent,
              })}
              onClick={() => {
                changePage(page);
              }}
              disabled={isCurrent}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className={styles.arrow}
        onClick={() => {
          changePage(currentPage + 1);
        }}
        disabled={isLastPage}
      >
        <img src={nextIcon} alt="arrow right" />
      </button>
    </div>
  );
};

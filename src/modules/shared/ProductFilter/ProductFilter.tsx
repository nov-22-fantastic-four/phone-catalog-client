import React from 'react';
import { Dropdown } from '../Dropdown';
import { useSearchParams } from 'react-router-dom';
import { type Option, SortBy } from '../../../types';
import styles from './ProductFilter.module.scss';

const sortOptions: Option[] = Object.entries(SortBy);
const perPageOptions: Option[] = ['All', '16', '8', '4'].map(optionName => (
  [optionName, optionName.toLowerCase()]
));

const defaultSort = SortBy.Alphabetically;
const defaultPerPage = '16';

export const ProductFilter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSort = searchParams.get('sort') || defaultSort;
  const currentPerPage = searchParams.get('perPage') || defaultPerPage;

  const handleSortChange = (sort: string): void => {
    if (sort === defaultSort) {
      searchParams.delete('sort');
    } else {
      searchParams.set('sort', sort);
    }

    setSearchParams(searchParams);
  };

  const handlePerPageChange = (perPage: string): void => {
    if (perPage === defaultPerPage) {
      searchParams.delete('perPage');
    } else {
      searchParams.set('perPage', perPage);
    }

    if (perPage !== currentPerPage) {
      searchParams.delete('page');
    }

    setSearchParams(searchParams);
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <p className={styles.name}>
          Sort By
        </p>

        <Dropdown
          selectedValue={currentSort}
          options={sortOptions}
          onSelect={handleSortChange}
        />
      </div>

      <div className={styles.item}>
        <p className={styles.name}>
          Items on page
        </p>

        <Dropdown
          selectedValue={currentPerPage}
          options={perPageOptions}
          onSelect={handlePerPageChange}
        />
      </div>
    </div>
  );
};

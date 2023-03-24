import React from 'react';
import { PhoneItem } from '../PhoneItem';
import { phone } from './phone';
import style from './LoadingPhone.module.scss';

export const LoadingPhone: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <PhoneItem phone={phone} />
    </div>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.svg';
import { scrollToTop } from '../../../utils';

interface Props {
  className: string
}

export const LogoLink: React.FC<Props> = ({ className }) => (
  <Link to="/" onClick={scrollToTop} >
    <img
      src={logo}
      alt="logo"
      className={className}
    />
  </Link>
);

import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.svg';

interface Props {
  className: string
}

export const LogoLink: React.FC<Props> = ({ className }) => (
  <Link to="/" >
    <img
      src={logo}
      alt="logo"
      className={className}
    />
  </Link>
);

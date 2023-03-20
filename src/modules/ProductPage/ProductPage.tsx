import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { type Phone } from '../../types';
import { BreadCrumbs, Container, BackButton } from '../shared';

const samplePhoneLink =
  'https://phone-catalog-api.onrender.com/phones/';

export const ProductPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);
  const location = useLocation().pathname.slice(8);

  console.log(location);

  useEffect(() => {
    const fetchPhone = async(): Promise<void> => {
      const res = await fetch(`${samplePhoneLink}/${location}`);
      const fetchedPhone = await res.json();

      setPhone(fetchedPhone);
    };

    void fetchPhone();
  }, []);

  return (
    <Container>
      <BreadCrumbs phoneName={phone?.name} />
      <BackButton />
    </Container>
  );
};

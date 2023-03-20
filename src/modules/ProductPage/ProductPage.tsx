import React, { useEffect, useState } from 'react';
import { type Phone } from '../../types';
import { BreadCrumbs, Container, BackButton } from '../shared';
import { PhoneItem } from './PhoneItem';

const samplePhoneLink =
  'https://phone-catalog-api.onrender.com/phones/apple-iphone-7-32gb-black';

export const ProductPage: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);

  console.log(phone);

  useEffect(() => {
    const fetchPhone = async(): Promise<void> => {
      const res = await fetch(samplePhoneLink);
      const fetchedPhone = await res.json();

      setPhone(fetchedPhone);
    };

    void fetchPhone();
  }, []);

  if (!phone) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <BreadCrumbs phoneName={phone.name} />
      <BackButton />
      <PhoneItem
        phone={phone}
      />
    </Container>
  );
};

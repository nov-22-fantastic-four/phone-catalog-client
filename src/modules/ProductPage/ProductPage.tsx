import React, { useEffect, useState } from 'react';
import { type Phone } from '../../types';
import { BreadCrumbs, Container, BackButton } from '../shared';
import { PhoneItem } from './PhoneItem';
import { useParams } from 'react-router';
import { getById } from '../../api/phones';

export const ProductPage: React.FC = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);

  console.log(phone);

  useEffect(() => {
    const fetchPhone = async(): Promise<void> => {
      if (phoneId) {
        const fetchedPhone = await getById(phoneId);

        setPhone(fetchedPhone);
      }
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

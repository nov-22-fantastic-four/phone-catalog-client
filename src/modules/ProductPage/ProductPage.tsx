import React, { useEffect, useState } from 'react';
import { type Phone } from '../../types';

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

  return (
    <h1>
      Lol
    </h1>
  );
};

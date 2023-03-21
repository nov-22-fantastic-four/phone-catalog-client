import React, { useEffect, useState } from 'react';
import { type Phone, type Product } from '../../types';
import { BreadCrumbs, Container, BackButton } from '../shared';
import { PhoneItem } from './PhoneItem';
import { useParams } from 'react-router';
import { getById } from '../../api/phones';
import { ProductCarousel } from '../shared/ProductCarousel/ProductCarousel';
import { getWithPagination } from '../../api/products';

export const ProductPage: React.FC = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [recommended, setRecommended] = useState<Product[]>([]);

  useEffect(() => {
    const fetchPhone = async(): Promise<void> => {
      if (phoneId) {
        const fetchedPhone = await getById(phoneId);

        setPhone(fetchedPhone);
      }
    };

    const fetchRecommended = async(): Promise<void> => {
      const fetchedProducts = await getWithPagination(1, 8);

      setRecommended(fetchedProducts);
    };

    void fetchRecommended();
    void fetchPhone();
  }, [phoneId]);

  if (!phone) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <BreadCrumbs phoneName={phone.name} />
      <BackButton />
      <PhoneItem phone={phone}/>
      <ProductCarousel
        title="You may also like"
        products={recommended}
        showFullPrice
      />
    </Container>
  );
};

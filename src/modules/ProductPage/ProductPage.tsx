import React, { useCallback, useEffect, useState } from 'react';
import { type Phone, type Product } from '../../types';
import { BreadCrumbs, Container, BackButton } from '../shared';
import { LoadingPhone, PhoneItem } from './PhoneItem';
import { useLocation, useParams } from 'react-router';
import { getById } from '../../api/phones';
import { ProductCarousel } from '../shared/ProductCarousel/ProductCarousel';
import { getRecommended } from '../../api/products';
import { scrollToTop } from '../../utils';
import { useNavigate } from 'react-router-dom';

export const ProductPage: React.FC = () => {
  const { phoneId } = useParams();
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [recommended, setRecommended] = useState<Product[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(scrollToTop, [location]);

  const fetchPhone = useCallback(async(): Promise<void> => {
    if (phoneId) {
      try {
        setIsLoading(true);

        const fetchedPhone = await getById(phoneId);

        setPhone(fetchedPhone);
      } catch (err) {
        navigate('/404', { replace: true });
      } finally {
        setIsLoading(false);
      }
    }
  }, [phoneId]);

  const fetchRecommended = useCallback(async(): Promise<void> => {
    if (phone) {
      const fetchedProducts = await getRecommended(phone.productId);

      setRecommended(fetchedProducts);
    }
  }, [phone]);

  useEffect(() => {
    void fetchPhone();
  }, [phoneId]);

  useEffect(() => {
    void fetchRecommended();
  }, [phone]);

  return (
    <Container>
      <BreadCrumbs phoneName={phone?.name} />
      <BackButton />

      {!phone
        ? <LoadingPhone />
        : <PhoneItem phone={phone} isLoading={isLoading} /> }

      <ProductCarousel
        title="You may also like"
        products={recommended}
        showFullPrice
      />
    </Container>
  );
};

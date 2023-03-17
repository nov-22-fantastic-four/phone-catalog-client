import { type Phone, type Product } from '../types';
import { API_URL } from './constants';

export const getWithPagination = async(
  page: number,
  perPage: number,
): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/phones?page=${page}&perPage=${perPage}`);
  const phones = await response.json();

  return phones;
};

export const getById = async(phoneId: string): Promise<Phone> => {
  const response = await fetch(`${API_URL}/phones/${phoneId}`);
  const phones = await response.json();

  return phones;
};

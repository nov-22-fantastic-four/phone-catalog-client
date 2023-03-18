import { type Product } from '../types';
import { API_URL } from './constants';

export const getWithPagination = async(
  page: number,
  perPage: number,
): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products?page=${page}&perPage=${perPage}`);
  const products = await response.json();

  return products;
};

export const getById = async(id: number): Promise<Product> => {
  const response = await fetch(`${API_URL}/products/${id}`);
  const product = await response.json();

  return product;
};

export const getCount = async(): Promise<number> => {
  const response = await fetch(`${API_URL}/products/count`);
  const data = await response.json();

  return data.count;
};

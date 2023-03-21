import { type Product } from '../types';
import { API_URL } from './constants';

export const getAll = async(): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products`);
  const products = await response.json();

  return products;
};

export const getWithParams = async(
  urlSearchParams: URLSearchParams,
): Promise<Product[]> => {
  const params = new URLSearchParams(urlSearchParams);

  if (!params.has('perPage')) {
    params.set('perPage', '16');
  }

  if (params.get('perPage') === 'all') {
    params.delete('perPage');
  }

  const response = await fetch(`${API_URL}/products?${params.toString()}`);
  const products = await response.json();

  return products;
};

export const getWithPagination = async(
  page: number,
  perPage: number,
): Promise<Product[]> => {
  if (!perPage) {
    return await getAll();
  }

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

export const getNew = async(): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products/new`);
  const products = await response.json();

  return products;
};

export const getDiscount = async(): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products/discount`);
  const products = await response.json();

  return products;
};

export const getRecommended = async(id: number): Promise<Product[]> => {
  const response = await fetch(`${API_URL}/products/${id}/recommended`);
  const products = await response.json();

  return products;
};

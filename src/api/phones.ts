import { type Phone } from '../types';
import { API_URL } from './constants';

export const getById = async(phoneId: string): Promise<Phone> => {
  const response = await fetch(`${API_URL}/phones/${phoneId}`);
  const phones = await response.json();

  return phones;
};
